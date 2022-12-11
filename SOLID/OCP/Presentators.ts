import { PresentatorFR } from "./ControllerFR";
import { ReturnedFR } from "./Interactor";

export class ScreenPresentator implements PresentatorFR {
  constructor() {}

  output = (returnedFR: ReturnedFR) => {
    return `screen display ${JSON.stringify(returnedFR, null, 2)}`;
  };
}

export class PDFPresentator implements PresentatorFR {
  constructor() {}

  output = (returnedFR: ReturnedFR) => {
    return `pdf display (${JSON.stringify(returnedFR, null, 2)})`;
  };
}
