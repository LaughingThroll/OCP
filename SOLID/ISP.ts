// Interface Segregation Principle
// ми не повинні залежати від інтерфейсів які не використовуємо
// link to example https://stackify.com/interface-segregation-principle/

// Violations of the interface segregation principle
// interface ICoffeeMachine {
//   makeSimpleCoffee: () => void;
//   makeFilterCoffee: () => void; // method need only for BasicCoffeeMachine
//   makeEspressoCoffee: () => void; // method need only for EspressoCoffeeMachine
// }

interface ICoffeeMachine {
  makeSimpleCoffee: () => void;
}

interface IBasicCoffeeMachine extends ICoffeeMachine {
  makeFilterCoffee: () => void; // method need only for BasicCoffeeMachine
}

interface IEspressoCoffeeMachine extends ICoffeeMachine {
  makeEspressoCoffee: () => void; // method need only for EspressoCoffeeMachine
}

class BasicCoffeeMachine implements IBasicCoffeeMachine {
  constructor() {}

  makeSimpleCoffee = () => {};
  makeFilterCoffee = () => {};
}

class EspressoCoffeeMachine implements IEspressoCoffeeMachine {
  constructor() {}

  makeSimpleCoffee = () => {};
  makeEspressoCoffee = () => {};
}
