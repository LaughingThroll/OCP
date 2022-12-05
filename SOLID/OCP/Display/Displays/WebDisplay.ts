import { ScreenPresentator } from "../Presentators/ScreenPresentator";

export class WebDisplay {
  private screenPresentator: ScreenPresentator;
  constructor() {
    this.screenPresentator = new ScreenPresentator();
  }

  drawWebDisplay = async (id: number) => {
    const data = await this.screenPresentator.getScreenDisplayData(id);
    const div = document.createElement("div");
    div.textContent = data.transformedFinanceData;
    document.body.append(div);
  };
}
