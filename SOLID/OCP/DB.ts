import { GateWayFinanceData } from "./Interactor/GatewayFinanceData";
import { CreateFinanceData, FinanceData } from "./Interactor/FinanceEntity";

const generateId = () => Date.now();

export class DispatcherFinanceData implements GateWayFinanceData {
  getFinanceData = (id: number) => {
    const currentFinanceData = financeDataBase.find((el) => el.id === id);
    if (currentFinanceData) {
      return currentFinanceData;
    }

    throw new Error("No Exist finance Data by this id:" + id);
  };

  createFinanceData = (payload: CreateFinanceData) => {
    const currentFinanceData: FinanceData = { ...payload, id: generateId() };
    financeDataBase.push(currentFinanceData);
  };
  updateFinanceData = (financeData: FinanceData) => {
    financeDataBase = financeDataBase.map((el) => {
      if (el.id === financeData.id) {
        return financeData;
      }
      return el;
    });
  };
  deleteFinanceData = (id: number) => {
    financeDataBase = financeDataBase.filter((el) => el.id === id);
    return id;
  };
}

let financeDataBase: FinanceData[] = [];
