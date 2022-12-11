import { DB } from "./DB";

export interface RequesterFR {
  getFR: () => ReturnedFR;
}

export interface ReturnedFR {
  financeReport: string;
}

export class GeneratorFR implements RequesterFR {
  private db: GatewayFR;

  constructor(db?: GatewayFR) {
    this.db = db || new DB();
  }

  getFR = () => {
    return this.db.getFRFromDB();
  };
}

export interface GatewayFR {
  getFRFromDB: () => ReturnedFR;
}
