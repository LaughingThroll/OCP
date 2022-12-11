// програмні сутності повінни бути відкритими для розширення та закритими для змін
// новий код мусить додаватися бе змін старого коду

import { ControllerFR } from "./ControllerFR";
import { MongoDB } from "./DB";
import { GeneratorFR } from "./Interactor";
import { PDFPresentator, ScreenPresentator } from "./Presentators";

const webDisplay = new ControllerFR({
  presentatorFR: new ScreenPresentator(),
});

const pdfDisplay = new ControllerFR({
  presentatorFR: new PDFPresentator(),
  requesterFR: new GeneratorFR(new MongoDB()),
});

const react = (controllerFR: ControllerFR) => {};
const angular = (controllerFR: ControllerFR) => {};

react(webDisplay);
angular(pdfDisplay);
