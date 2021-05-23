const jose = require("node-jose");
const jsQR = require("jsqr");
const zlib = require("zlib");

function getQRFromImage(imageData) {
  return jsQR(
    new Uint8ClampedArray(imageData.data.buffer),
    imageData.width,
    imageData.height
  );
}

function getScannedJWS(shcString) {
  return shcString
    .match(/^shc:\/(.+)$/)[1]
    .match(/(..?)/g)
    .map((num) => String.fromCharCode(parseInt(num, 10) + 45))
    .join("");
}

function verifyJWS(jws) {
  return jose.JWK.asKey({
    kid: "some-kid",
    alg: "ES256",
    kty: "EC",
    crv: "P-256",
    use: "sig",
    x: "XSxuwW_VI_s6lAw6LAlL8N7REGzQd_zXeIVDHP_j_Do",
    y: "88-aI4WAEl4YmUpew40a9vq_w5OcFvsuaKMxJRLRLL0",
  }).then(function (key) {
    const { verify } = jose.JWS.createVerify(key);
    console.log("jws", jws);
    return verify(jws);
  });
}

function decodeJWS(jws) {
  const verifiedPayload = jws.split(".")[1];
  const decodedPayload = Buffer.from(verifiedPayload, "base64");

  return new Promise((resolve, reject) => {
    zlib.inflateRaw(decodedPayload, function (err, decompressedResult) {
      if (typeof err === "object" && err) {
        console.log("Unable to decompress");
        reject();
      } else {
        console.log(decompressedResult);
        scannedResult = decompressedResult.toString("utf8");
        const entries =
          JSON.parse(scannedResult).vc.credentialSubject.fhirBundle.entry;

        resolve(entries);
      }
    });
  });
}

module.exports = {
  getQRFromImage,
  getScannedJWS,
  verifyJWS,
  decodeJWS,
};
