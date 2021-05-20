var fs = require("fs");
var path = require("path");
var jose = require("node-jose");
var jsQR = require("jsqr");
var PNG = require("pngjs").PNG;
var zlib = require("zlib");
var pdf2img = require("pdf2img");
var base64url = require("base64url");

const input = process.argv[2];
if (input === undefined) {
  console.log(
    "Provide path to PNG screenshot of the PDF (yeah I know, it's hackish for now)"
  );
  process.exit(-1);
}

jose.JWK.asKey({
  kid: "some-kid",
  alg: "ES256",
  kty: "EC",
  crv: "P-256",
  use: "sig",
  x: "XSxuwW_VI_s6lAw6LAlL8N7REGzQd_zXeIVDHP_j_Do",
  y: "88-aI4WAEl4YmUpew40a9vq_w5OcFvsuaKMxJRLRLL0",
}).then(function (key) {
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

  console.log("QR-Code payload --> JWS");
  console.log("-----");
  console.log(scannedJWS);
  console.log("-----");

  console.log("JWS Header");
  console.log(base64url.decode(scannedJWS.split(".")[0]));
  console.log("-----");

  jose.JWS.createVerify(key)
    .verify(scannedJWS)
    .then(function (result) {
      const verifiedPayload = scannedJWS.split(".")[1];
      console.log("JWS Payload (Base64)");
      console.log(verifiedPayload);
      console.log("-----");

      const decodedPayload = Buffer.from(verifiedPayload, "base64");
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
    })
    .catch(function (e) {
      console.log("Ooooh crap - this looks like a fake vacinnation proof");
    });
});
