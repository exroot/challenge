import { rest } from "msw";

const BACKEND_URL = "http://localhost:4000";
const responseData = [
  {
    file: "test2.csv",
    lines: [
      {
        text: "byIbA",
        number: 6984,
        hex: "566428da7465dc90a71ec0e6e33003bc",
      },
    ],
  },
  {
    file: "test3.csv",
    lines: [
      {
        text: "GxdXtMgXDOr",
        number: 760,
        hex: "c53c01f94896f15f19419415729945f8",
      },
      {
        text: "bSkXPoVePYkoyaLfjCUgxvcXOmOoOWkd",
        number: 15301,
        hex: "758ec20eaea0ab2ed0df9ffcfa0156de",
      },
      {
        text: "OijSR",
        number: 595,
        hex: "554c037670e718d1b26611b3be8378d6",
      },
    ],
  },
  {
    file: "test6.csv",
    lines: [
      {
        text: "jmmdBvnGmlDZVKgUkQMSipqrEGjee",
        number: 479,
        hex: "27496acb9e38bfadc03057eee13a8bb3",
      },
      {
        text: "JdMcrXkEgsbEUStJaEPvylTsgmig",
        number: 793,
        hex: "d7b21b50fee67c14e9662b62ad3aacbc",
      },
      {
        text: "jOSODBwhKiApCjm",
        number: 344013,
        hex: "123aff9c45e38c30708de3bd5192d9b5",
      },
      {
        text: "JJndwFdDTnbbd",
        number: 18919591,
        hex: "6040027ae6ffe6264bc6a089e14908ef",
      },
      {
        text: "BTWPzvVDFp",
        number: 53021658,
        hex: "c8ba01152e2ca73fd6c7fc3dbaa231fb",
      },
      {
        text: "f",
        number: 153751089,
        hex: "b6388558f9c3631195f2ae6f77292305",
      },
      {
        text: "kldUUvRmGKBTzLnSDfKo",
        number: 29,
        hex: "0ba2e3b28d2fc12a8cefaa3a3d218633",
      },
    ],
  },
  {
    file: "test9.csv",
    lines: [
      {
        text: "GqQD",
        number: 7,
        hex: "8439a873ac7f8270b765cd7d2d8946c1",
      },
      {
        text: "hPKwfMfMehiSnrTozpFIrOOw",
        number: 4157468,
        hex: "c95171015f80ad159550deefeeab9eca",
      },
      {
        text: "tSSTvfrUESInPhaKIhApekAtnv",
        number: 5,
        hex: "c06b00c5c5f7cdb7db12adf69543c551",
      },
      {
        text: "ekknTYWjqpH",
        number: 9,
        hex: "30c08ac141697b055408132183dc26c4",
      },
      {
        text: "pQPytzSJhkDSkDySuiUJr",
        number: 731,
        hex: "1eb0de62c0154e92cafcd63b8a8548ae",
      },
      {
        text: "jit",
        number: 4110815950,
        hex: "a9db52f603ad3ef95f87de4098a1c9c7",
      },
      {
        text: "JNeubUFu",
        number: 5,
        hex: "ec7d971916ae5ae7380eeed181e4e076",
      },
      {
        text: "CJdcCVGhtfLoRmYAxCvZqtIyPPORF",
        number: 4108,
        hex: "5047125fcfdb68bbf3c26bbfb2836242",
      },
      {
        text: "GwSmvOv",
        number: 5033982,
        hex: "bc3047cc9dc03f2ce8b5e225def6e890",
      },
    ],
  },
];

export const successGetFilesData = rest.get(
  `${BACKEND_URL}/files/data`,
  (req, res, ctx) => {
    // If authenticated, return a mocked user details
    console.log(req.params);
    return res(ctx.status(200), ctx.json(responseData));
  }
);

export const errorGetFilesData = rest.get(
  `${BACKEND_URL}/files/data`,
  (req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(ctx.status(500), ctx.json({ errorMessage: `error` }));
  }
);

export const handlers = [successGetFilesData];
