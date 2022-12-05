//  Open Close Principle
//  Програмні сутності відкриті для розширення і закриті для змін
//  Новий функціонал повинен додаватися без зміни старого коду

import { PrintDispay } from "./Display/Displays/PrintDisplay";
import { WebDisplay } from "./Display/Displays/WebDisplay";

const FINANCE_ID: number = 123445;

(function (financeId: number) {
  if (new window.InputDeviceInfo().deviceId === "1") {
    new WebDisplay().drawWebDisplay(financeId);
    return;
  }

  new PrintDispay().drawPrintDisplay(financeId);
})(FINANCE_ID);
