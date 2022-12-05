import { DispatcherFinanceData } from "../DB";
import { CreateFinanceData, FinanceData } from "./FinanceEntity";

export class GeneratorFinanceReport {
  private dispatcherFinanceData: DispatcherFinanceData;

  constructor() {
    this.dispatcherFinanceData = new DispatcherFinanceData();
  }

  getFinanceReprot = (id: number) => {
    return this.dispatcherFinanceData.getFinanceData(id);
  };

  createFinanceReport = (paylaod: CreateFinanceData) => {
    this.dispatcherFinanceData.createFinanceData(paylaod);
  };

  updateFinanceReport = (payload: FinanceData) => {
    this.dispatcherFinanceData.updateFinanceData(payload);
  };

  deleteFinanceReport = (id: number) => {
    this.deleteFinanceReport(id);
  };

  isFinanceData = (data: any): data is FinanceData => {
    return "financeData" in data;
  };
}
