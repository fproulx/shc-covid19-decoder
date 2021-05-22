const ZXing = require("@zxing/library");
const { verifyJWS, decodeJWS, getScannedJWS } = require("./shc");

function setResult(result) {
  document.getElementById("result").textContent = result;
}

function decodeOnce(codeReader, selectedDeviceId) {
  codeReader.decodeFromInputVideoDevice(selectedDeviceId, "video").then(
    (result) => {
      console.log("SHC string", result.text);
      const scannedJWS = getScannedJWS(result.text);
      console.log("scannedJWS", scannedJWS);
      verifyJWS(scannedJWS).then(
        function () {
          console.log("scannedJWS", scannedJWS);
          return decodeJWS(scannedJWS).then((decoded) =>
            setResult(JSON.stringify(decoded, null, 2))
          );
        },
        function (e) {
          console.error(e);
          setResult("This looks like a fake vaccination proof");
        }
      );
    },
    (err) => {
      setResult(err);
    }
  );
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
