// Приницип підстановки Барбари Лісков
// якщо для того ж самого підтипу підставити іншу сутність то вони повинні підходити

interface ILicense {
  calcFree: () => void;
}

class Billing {
  private license: ILicense;

  constructor(license: ILicense) {
    this.license = license;
  }
}

class PersonalLicense implements ILicense {
  calcFree = () => {
    console.log("PersonalLicense calc");
  };
}

class BusinessLicense implements ILicense {
  calcFree = () => {
    console.log("BusinessLicense calc");
  };
}

// new PersonalLicense
const billing = new Billing(new BusinessLicense());

// порушення принципу Барбари Лісков

class Rect {
  setWidth = () => {};
  setHeight = () => {};
}

class Square extends Rect {
  constructor() {
    super();
  }

  setSide = () => {
    this.setHeight();
    this.setWidth();
  };
}

// new Rect()
const rect = new Square();
// error
// rect.setHeight();
// rect.setWidth();

if (rect instanceof Rect) {
  rect.setHeight();
  rect.setWidth();
}

if (rect instanceof Square) {
  rect.setSide();
}
