const issuers = [
  {
    id: "ca.qc",
    iss: "XXX",
    keys: [
      { kid: "some-kid",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "XSxuwW_VI_s6lAw6LAlL8N7REGzQd_zXeIVDHP_j_Do",
        y: "88-aI4WAEl4YmUpew40a9vq_w5OcFvsuaKMxJRLRLL0" },
    ]
  },
];

module.exports = {
  issuers,
};
