import { GeneratorFR, RequesterFR, ReturnedFR } from "./Interactor";

interface ControllerArgs {
  presentatorFR: PresentatorFR;
  requesterFR?: RequesterFR;
}

export class ControllerFR {
  private presentatorFR: PresentatorFR;
  private requesterFR: RequesterFR;

  constructor({ presentatorFR, requesterFR }: ControllerArgs) {
    this.presentatorFR = presentatorFR;
    this.requesterFR = requesterFR || new GeneratorFR();
  }

  output() {
    this.presentatorFR.output(this.request());
  }

  request() {
    return this.requesterFR.getFR();
  }
}

export interface PresentatorFR {
  output: (returnedFR: ReturnedFR) => string;
}
