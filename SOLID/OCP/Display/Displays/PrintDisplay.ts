import { PrintPresentator } from "../Presentators/PrintPresentator";

export class PrintDispay {
  private printPresentator: PrintPresentator;
  constructor() {
    this.printPresentator = new PrintPresentator();
  }

  drawPrintDisplay = async (id: number) => {
    const data = await this.printPresentator.getPrintDisplayData(id);

    if (window.navigator.pdfViewerEnabled) {
      const div = document.createElement("div");
      div.textContent = data.transformedFinanceData;
      document.body.append(div);
    }

    window.alert("Please enable PDF view. Instruction ...");
  };
}
