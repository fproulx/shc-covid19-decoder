var fs = require("fs");
var path = require("path");
var jose = require("node-jose");
var jsQR = require("jsqr");
var PNG = require("pngjs").PNG;
var zlib = require("zlib");
var pdf2img = require("pdf2img");
var base64url = require("base64url");

const input = process.argv[2];

imageData = PNG.sync.read(fs.readFileSync(input));

const scannedQR = jsQR(
  new Uint8ClampedArray(imageData.data.buffer),
  imageData.width,
  imageData.height
);

const scannedJWS = scannedQR.chunks
  .filter((chunk) => chunk.type === "numeric")[0]
  .text.match(/(..?)/g)
  .map((num) => String.fromCharCode(parseInt(num, 10) + 45))
  .join("");

console.log("QR-Code JWS Payload");
console.log("-----");
console.log(scannedJWS);
console.log("-----");

console.log("JWS Header");
console.log(base64url.decode(scannedJWS.split(".")[0]));
console.log("-----");

const unverifiedPayload = scannedJWS.split(".")[1];
console.log("JWS Payload (Base64)");
console.log(unverifiedPayload);
console.log("-----");

const decodedPayload = Buffer.from(unverifiedPayload, "base64");
zlib.inflateRaw(decodedPayload, function (err, decompressedResult) {
  if (typeof err === "object" && err) {
    console.log("Unable to decompress");
  } else {
    scannedResult = decompressedResult.toString("utf8");
    const entries = JSON.parse(
      scannedResult
    ).vc.credentialSubject.fhirBundle.entry.map((entry) =>
      console.log(JSON.stringify(entry, null, 2))
    );
  }
});
