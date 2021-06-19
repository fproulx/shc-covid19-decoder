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
  {
    id: "us.ca",
    iss: "https://myvaccinerecord.cdph.ca.gov/creds",
    keys: [
      { kid: "7JvktUpf1_9NPwdM-70FJT3YdyTiSe2IvmVxxgDSRb0",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "3dQz5ZlbazChP3U7bdqShfF0fvSXLXD9WMa1kqqH6i4",
        y: "FV4AsWjc7ZmfhSiHsw2gjnDMKNLwNqi2jMLmJpiKWtE" },
    ]
  },
];

module.exports = {
  issuers,
};
