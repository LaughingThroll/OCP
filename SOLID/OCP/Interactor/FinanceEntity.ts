export interface FinanceData {
  id: number;
  financeData: unknown;
}

export type CreateFinanceData = Omit<FinanceData, "id">;
