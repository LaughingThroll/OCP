import { GatewayFR } from "./Interactor";

export class DB implements GatewayFR {
  getFRFromDB = () => {
    return financeReprots[0];
  };
}

const financeReprots = [
  {
    financeReport: "web display",
  },
];

export class MongoDB implements GatewayFR {
  getFRFromDB = () => {
    return mongoFinanceReprots[0];
  };
}

const mongoFinanceReprots = [
  {
    financeReport: "mongo pdf display",
  },
];
