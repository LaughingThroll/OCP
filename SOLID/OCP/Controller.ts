import { FinanceData } from "./Interactor/FinanceEntity";
import { GeneratorFinanceReport } from "./Interactor/GeneratorFinanceReport";

// можно обробити помилку
// мабуть зайва залежність від Interactor/FinanceEntity
export class ControllerFinanceData implements PresentatorFinanceData {
  private generatorFinanceReport: GeneratorFinanceReport;

  constructor() {
    this.generatorFinanceReport = new GeneratorFinanceReport();
  }

  getFinanceData = (id: number) => {
    try {
      const data = this.generatorFinanceReport.getFinanceReprot(id);
      return data;
    } catch (error) {
      return error as FinanceDataError;
    }
  };

  isFinanceData = (data: any): data is FinanceData => {
    return this.generatorFinanceReport.isFinanceData(data);
  };
}

export interface FinanceDataError {
  message: string;
  status: number;
}
export interface PresentatorFinanceData {
  getFinanceData: (id: number) => void;
}
