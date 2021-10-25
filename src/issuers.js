const issuers = [
  {
    id: "ca.qc",
    iss: "https://covid19.quebec.ca/PreuveVaccinaleApi/issuer",
    keys: [
      { kid: "qFdl0tDZK9JAWP6g9_cAv57c3KWxMKwvxCrRVSzcxvM",
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
  {
    id: "us.ny",
    iss: "https://ekeys.ny.gov/epass/doh/dvc/2021",
    keys: [
      { kid: "9ENs36Gsu-GmkWIyIH9XCozU9BFhLeaXvwrT3B97Wok",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "--M0AedrNg31sHZGAs6qg7WU9LwnDCMWmd6KjiKfrZU",
        y: "rSf2dKerJFW3-oUNcvyrI2x39hV2EbazORZvh44ukjg" },
    ]
  },
  {
    id: "us.la",
    iss: "https://healthcardcert.lawallet.com",
    keys: [
      { kid: "UOvXbgzZj4zL-lt1uJVS_98NHQrQz48FTdqQyNEdaNE",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "n1PxhSk7DQj8ZBK3VIfwhlcN__QG357gbiTfZYt1gn8",
        y: "ZDGv5JYe4mCm75HCsHG8UkIyffr1wcZMwJjH8v5cGCc" },
    ]
  },
  {
    id: "ca.yt",
    iss: "https://pvc.service.yukon.ca/issuer",
    keys: [
      { kid: "UnHGY-iyCIr__dzyqcxUiApMwU9lfeXnzT2i5Eo7TvE",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "wCeT9rdLYTpOK52OK0-oRbwDxbljJdNiDuxPsPt_1go",
        y: "IgFPi1OrHtJWJGwPMvlueeHmULUKEpScgpQtoHNjX-Q" },
    ]
  },
  {
    id: "ca.bc",
    iss: "https://smarthealthcard.phsa.ca/v1/issuer",
    keys: [
      { kid: "XCqxdhhS7SWlPqihaUXovM_FjU65WeoBFGc_ppent0Q",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "xscSbZemoTx1qFzFo-j9VSnvAXdv9K-3DchzJvNnwrY",
        y: "jA5uS5bz8R2nxf_TU-0ZmXq6CKWZhAG1Y4icAx8a9CA" },
    ]
  },
  {
    id: "us.va",
    iss: "https://apps.vdh.virginia.gov/credentials",
    keys: [
      { kid: "sy5Q85VbiH4jNee-IpFkQvMxlVAhZ_poLMPLHiDF_8I",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "UDYtkThsYIdMuzC9AJi0CDNwwmSGt8Z75BBl9DbLXn0",
        y: "xWNNHxwz0RtTgTlBom3X8xFP6U5e92KYGZIBI2SYImA" },
    ]
  },
  {
    id: "us.hi",
    iss: "https://travel.hawaii.gov",
    keys: [
      { kid: "Qxzp3u4Z6iafzbz-6oNnzobPG8HUr0Jry38M3nuV5A8",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "sxIW-vGe4g7LXU0ZpMOiMmgMznaC_8qj6HW-2JhCTkI",
        y: "Ytmnz6q7qn9GhnsAB3GP3MFlnk9kTW3wKk7RAue9j8U" },
    ]
  },
  {
    id: "ca.sk-001",
    iss: "https://skphr.prd.telushealthspace.com",
    keys: [
      { kid: "xOqUO82bEz8APn_5wohZZvSK4Ui6pqWdSAv5BEhkes0",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "Hk4ktlNfoIIo7jp5I8cefp54Ils3TsKvKXw_E9CGIPE",
        y: "7hVieFGuHJeaNRCxVgKeVpoxDJevytgoCxqVZ6cfcdk" },
    ]
  },
  {
    id: "ca.sk-002",
    iss: "https://commons.ehealthsask.ca",
    keys: [
      { kid: "RBvL32MBD4FXqXKE86HU9Nnjp0hADhqztOXb-M_mP_k",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "p9Rf7Wh1_vCMTK4i4XLQFI6_LR0ZhISQVJ2PAy2yEdA",
        y: "ai71citYuk72ldpGiwRZ0NfZGJPzKZBVulaUv_74IjY" },
    ]
  },
  {
    id: "ca.nt",
    iss: "https://www.hss.gov.nt.ca/covax",
    keys: [
      { kid: "8C-9TNgyGuOqc-3FXyNRq6m5U9S1wyhCS1TvpgjzkoU",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "C-9Lltax_iU6iYdK8DdCZzv4cQN6SFVUG7ACaCT_MKM",
        y: "_qaENBMJz6iLf1qyYMx2_D6fXxbbNoHbLcfdPF9rUI0", }, 
    ]
  },          
  {
    id: "ca.ab",
    iss: "https://covidrecords.alberta.ca/smarthealth/issuer",
    keys: [
      { kid: "JoO-sJHpheZboXdsUK4NtfulfvpiN1GlTdNnXN3XAnM",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "GsriV0gunQpl2X9KgrDZ4EDCtIdfOmdzhdlosWrMqKk",
        y: "S99mZMCcJRsn662RaAmk_elvGiUs8IvSA7qBh04kaw0" },
    ]
  },
  {
    id: "ca.ns",
    iss: "https://pvc.novascotia.ca/issuer",
    keys: [
      { kid: "UJrT9jU8vOCUl4xsI1RZjOPP8hFUv7n9mhVtolqH9qw",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "kIaIeOhhxpiN13sDs6RKVzCpvxxObI9adKF5YEmKngM",
        y: "AZPQ7CHd3UHp0i4a4ua1FhIq8SJ__BuHgDESuK3A_zQ" },
    ]
  },
  {
    id: "us.ut",
    iss: "https://docket.care/ut",
    keys: [
      { kid: "sBHR4URZTz8cq2kIV_JhTXwicbqp1tHtodItRSx0O0Q",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "uyzHUWf8EVXtlFW9nssxa1Z002rpc-GUw-YrZOZtmqo",
        y: "oFofHWIlPqfqCCU9R3fJOaUoWdzVzTcSNgmtF0Qgb6w" },
    ]
  },
  {
    id: "us.nj",
    iss: "https://docket.care/nj",
    keys: [
      { kid: "HvlLNClY2JAEhIhsZZ_CfRaxF5jdooWgaKAbLajhv2I",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "FssCyCxGTEuKiKqo-MwLDQlxz1vdKll4YFMkQaXVOkY",
        y: "A3nNMWC8IEQsZqH8Mp83qVLTA_X9eYwzr46o4-3YyRE" },
    ]
  },
  {
    id: "ca.mb",
    iss: "https://immunizationcard.manitoba.ca/api/national",
    keys: [
      { kid: "YnYeVk1pCtYvnmOytVTq09igCGdu_SyJM2Wn29AV7AQ",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "E2mScyP_Iwm0gn1nAYldT0MbWFUeapIsuh9ebqCJgkQ",
        y: "AePVDo-_XxQDJ_25BW4txoLPzuu7CQ65C2oLJIN4DxI" },
    ]
  },
  {
    id: "ca.on",
    iss: "https://prd.pkey.dhdp.ontariohealth.ca",
    keys: [
      { kid: "Nlgwb6GUrU_f0agdYKc77sXM9U8en1gBu94plufPUj8",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "ibapbMkHMlkR3D-AU0VTFDsiidQ49oD9Ha7VY8Gao3s",
        y: "arXU5frZGOvTZpvg045rHC7y0fqVOS3dKqJbUYhW5gw" },
    ]
  },
  {
    id: "ky",
    iss: "https://fhir-myrecord.cerner.com/r4/QGFlV8qKdgYu-vPpMAoQW5U4Jb7riiI2",
    keys: [
      { kid: "N2maG8qOhITe_zyPqcrCa6LT_mW18ZtFPy09cGAB24w",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "DNo1BEwoRPNRDYsulhhxu9jOxkvCuEVU4IaCs3H6PJ0",
        y: "zB_HLKrE_n5Xi9I7yMIION-IQpzH5MEZoP2GvRftSsI" },
    ]
  },
  {
    id: "us.mn",
    iss: "https://docket.care/mn",
    keys: [
      { kid: "j9NGIGK-wkXxnn6IyFHXFAYUmK9H7s74fT2gq66n5aY",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "OcuWX7IOlslRFWdaCFQeT5vlZqaoAJmbupPkqpmUGXE",
        y: "n8PosQKB9sTm6Rwy_FmDND2tHZ3AstzaWk7TAW9HnVU" },
    ]
  },
  {
    id: "ca.nl",
    iss: "https://www.gov.nl.ca/covid-19/life-during-covid-19/vaccination-record/prod",
    keys: [
      { kid: "UboztS3pE1mr0dnG7Rv24kRNqlYbHrbxd-qBFerpZvI",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "mB0PKTVRnr3JCtyucEjCHXkXW3COg5KP0y4gKCNJxWc",
        y: "PTpxiYECNiuyRwpwqjme8OIFdG7N-HwN2XH02phdZCs" },
    ]
  },
  {
    id: "us.de",
    iss: "https://smarthealthcard.iisregistry.net/delaware/issuer",
    keys: [
      { kid: "vYkxPjrksrvOfK8S02wkQ6LYcY5JLuDpnyERBklL-V8",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "alTrUEv7wMrOf9Sge9GeSAwz8cGz56JsJaZKzOlRQG4",
        y: "N1eSU9XhVdtb7l3rYj6_mXxHDVHj5ZDN_oB-sq6vVH8" },
    ]
  },
  {
    id: "us.ct",
    iss: "https://smarthealthcard.iisregistry.net/connecticut/issuer",
    keys: [
      { kid: "SzxkIArQIMhaFvD7yASR75tYfcIvc3SxbcY82WqpJYc",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "WOfXcDqfbL5pHYJ7TZ1G5nUs5RlpFEULjKK58-GIZHU",
        y: "cfP-u94WNE_gBD3dvp2XqKHF7k4JWC-JJsOhf8bxk4M" },
    ]
  },
  {
    id: "us.nv",
    iss: "https://smarthealthcard.iisregistry.net/nevada/issuer",
    keys: [
      { kid: "MLHtoHWeAr5PeKA8C-S16QduFcPVHYMnuRAMLag1Fus",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "XCA3RZFKOnDep4BA8MhxrUguZZeTofsm16WuQ-a3sKU",
        y: "9W0_JW9U7s98tOuZrkYiQyDEOoxgpMAEnIItC0_vLME" },
    ]
  },
  {
    id: "us.nm",
    iss: "https://smarthealthcard.iisregistry.net/newmexico/issuer",
    keys: [
      { kid: "TyJXvion-N1hiPReLqGqP3GEHIHUKqDbpNF6_Yx2x1g",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "h6eiqSzzTu5x5lL3WcrQcN8Dw-InqaZO24ejEqtaBUo",
        y: "lwnDiJgFRShPY0PMmfGdGWF84XlpJxIFU1C4cYnQhGM" },
    ]
  },
  {
    id: "us.ok",
    iss: "https://smarthealthcard.iisregistry.net/oklahoma/issuer",
    keys: [
      { kid: "mdc6xSqYJBj5wAfdO75tFY96MP1sRwv8o1vRKcJvWe4",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "_0Ykdew25aOEAoEqgiKOwsuQHaSBo8m4cxp7JrpnFoE",
        y: "SWDMBC-y-YMiso_hSQB6bl3MvYOii-rpYtgQJISt84Y" },
    ]
  },
  {
    id: "us.mp",
    iss: "https://smarthealthcard.iisregistry.net/cnmi/issuer",
    keys: [
      { kid: "dYx3mLMcBeG34o7pWchb-baIIgnTQqcR53EVeYgITu4",
        alg: "ES256", kty: "EC", crv: "P-256", use: "sig",
        x: "JwFxV0XxGdZZAGMWYZ8zWBKzkw1UwD3CspjlhmzKchE",
        y: "PDPZMLAN9DT0DFRTEQKAQJEylLIGXTcfCfX0yaiRrnE" },
    ]
  },
];

module.exports = {
  issuers,
};
