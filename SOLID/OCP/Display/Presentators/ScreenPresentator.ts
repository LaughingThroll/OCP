import { ControllerFinanceData, FinanceDataError } from "../../Controller";
import { FinanceData } from "../../Interactor/FinanceEntity";

// думаю що тут я мушу силатися на ControllerFinanceData щоб викликати метод і обробити його для презентації
export class ScreenPresentator {
  private controllerFinanceData: ControllerFinanceData;

  constructor() {
    this.controllerFinanceData = new ControllerFinanceData();
  }

  getScreenDisplayData = async (id: number) => {
    const data = await this.controllerFinanceData.getFinanceData(id);

    if (this.controllerFinanceData.isFinanceData(data)) {
      return this.handleFinanceData(data);
    }

    return this.handleFinanceDataError(data);
  };

  private handleFinanceData = (data: FinanceData): PrintDisplay => {
    return { transformedFinanceData: `[${data.financeData}]` };
  };

  private handleFinanceDataError = (data: FinanceDataError): PrintDisplay => {
    return {
      transformedFinanceData: `error: ${data.message}. Go to the developer Imad`,
    };
  };
}

interface PrintDisplay {
  transformedFinanceData: string;
}
