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

function verifyJWS(jws, checkKey) {
    return jose.JWK.asKey(checkKey).then(function (key) {
        const {verify} = jose.JWS.createVerify(key);
        return verify(jws);
    });
}

function decodeJWS(jws) {
    const verifiedPayload = jws.split(".")[1];
    const decodedPayload = Buffer.from(verifiedPayload, "base64");

    const header = jws.split(".")[0];
    const decodedHeader = JSON.parse(Buffer.from(header, "base64"));

    return new Promise((resolve, reject) => {
        zlib.inflateRaw(decodedPayload, function (err, decompressedResult) {
            if (typeof err === "object" && err) {
                console.log("Unable to decompress");
                reject();
            } else {
                scannedResult = decompressedResult.toString("utf8");
                deocdedResult = JSON.parse(scannedResult);

                fetch(deocdedResult.iss + "/.well-known/jwks.json")
                    .then(res => res.json())
                    .then((json) => {
                        if (json.keys[0].kid != decodedHeader.kid) {
                            console.log("Wrong KID returned");
                            reject();
                        }
                        verifyJWS(jws, json.keys[0]).then(
                            function () {
                                const entries =
                                    JSON.parse(scannedResult).vc.credentialSubject.fhirBundle.entry;
                                resolve(entries);
                            },
                            function (e) {
                                reject();
                            }
                        );

                    })

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
