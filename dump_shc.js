const fs = require("fs");
const PNG = require("pngjs").PNG;
const pdf2img = require("pdf2img");
const base64url = require("base64url");
const {
  getQRFromImage,
  getScannedJWS,
  verifyJWS,
  decodeJWS,
  decodeJWSPayload,
} = require("./src/shc");

const input = process.argv[2];
if (input === undefined) {
  console.log(
    "Provide path to PNG screenshot of the PDF (yeah I know, it's hackish for now)"
  );
  process.exit(-1);
}

imageData = PNG.sync.read(fs.readFileSync(input));

const scannedQR = getQRFromImage(imageData);
const scannedJWS = getScannedJWS(scannedQR.data);

console.log("QR-Code payload --> JWS");
console.log("-----");
console.log(scannedJWS);
console.log("-----");

console.log("JWS Header");
console.log(base64url.decode(scannedJWS.split(".")[0]));
console.log("-----");

decodeJWS(scannedJWS).then(
  function (decoded) {
    return verifyJWS(scannedJWS, decoded.iss).then(
      (result) => {
        decodeJWSPayload(result.payload).then(
          (result) => console.dir(result.vc.credentialSubject.fhirBundle.entry, {depth: null, compact: false})
        );
      },
      (e) => console.log("Signature verification failed: " + e.message)
    );
  },
  function (e) {
    console.log("Ooooh crap - this looks like a fake vaccination proof");
  }
);
