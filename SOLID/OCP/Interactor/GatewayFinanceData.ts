import { CreateFinanceData, FinanceData } from "./FinanceEntity";

// Additional Line to finance entities
export interface GateWayFinanceData {
  createFinanceData: (payload: CreateFinanceData) => void;
  getFinanceData: (id: number) => void;
  updateFinanceData: (financeData: FinanceData) => void;
  deleteFinanceData: (id: number) => void;
}
