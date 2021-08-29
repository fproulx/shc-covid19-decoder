const ZXing = require("@zxing/library");
const { verifyJWS, decodeJWS, getScannedJWS } = require("./shc");

const resultEl = document.getElementById('result');

function setResult(result) {
  resultEl.value = result;
}

function decodeOnce(codeReader, selectedDeviceId) {
  codeReader.decodeFromInputVideoDevice(selectedDeviceId, "video")
    .then((result) => {
      console.log("SHC string", result.text);
      const scannedJWS = getScannedJWS(result.text);
      console.log("scannedJWS", scannedJWS);

      return verifyJWS(scannedJWS)
        .then(() => decodeJWS(scannedJWS))
        .then((decoded) => setResult(JSON.stringify(decoded, null, 2)))
        .catch((error) => setResult('This looks like a fake vaccination proof'));
    })
    .catch((err) => setResult(err));
}

let selectedDeviceId;
const codeReader = new ZXing.BrowserQRCodeReader();
console.log("ZXing code reader initialized");

codeReader
  .getVideoInputDevices()
  .then((videoInputDevices) => {
    const sourceSelect = document.getElementById("sourceSelect");
    selectedDeviceId = videoInputDevices[0].deviceId;
    if (videoInputDevices.length >= 1) {
      videoInputDevices.forEach((element) => {
        const sourceOption = document.createElement("option");
        sourceOption.text = element.label;
        sourceOption.value = element.deviceId;
        sourceSelect.appendChild(sourceOption);
      });

      sourceSelect.onchange = () => {
        selectedDeviceId = sourceSelect.value;
      };

      const sourceSelectPanel = document.getElementById("sourceSelectPanel");
      sourceSelectPanel.style.display = "block";
    }

    document.getElementById("startButton").addEventListener("click", () => {
      decodeOnce(codeReader, selectedDeviceId);
      console.log(`Started decode from camera with id ${selectedDeviceId}`);
    });

    document.getElementById("resetButton").addEventListener("click", () => {
      codeReader.reset();
      setResult("");
      console.log("Reset.");
    });
  })
  .catch((err) => {
    console.error(err);
  });

const manualEntryForm = document.forms['manual-entry'];
manualEntryForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const shcString = formData.get('shcString');

  if (shcString === '') setResult('Error: Missing manual entry input value');

  const scannedJWS = getScannedJWS(shcString);

  return verifyJWS(scannedJWS)
    .then(() => decodeJWS(scannedJWS))
    .then((decoded) => setResult(JSON.stringify(decoded, null, 2)))
    .catch((error) => setResult('This looks like a fake vaccination proof'));
});

const copyButton = document.getElementById('copy');
copyButton.addEventListener('click', () => navigator.clipboard.writeText(resultEl.value));

