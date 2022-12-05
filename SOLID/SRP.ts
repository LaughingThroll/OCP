// Single Responsibility Principle
// Модуль повинен відповідати за одного актора(людину або группу людей які відносяться до однієї сфери:
// тех, фінанси, операційний і т.д.)

// порушення принципу SRP

interface Employee {
  workForTech: () => void;
  workForFinance: () => void;
  workForOperate: () => void;
}
// цей клас відповідає за декількох акторів одночасно
class EmployeeBulider implements Employee {
  workForTech() {
    console.log("tech");
  }
  workForFinance() {
    console.log("finance");
  }
  workForOperate() {
    console.log("Operate");
  }
}

// вирішення проблеми:
// 1. розбити клас Employee на різні класи

class TechEmployee {
  workForTech() {
    console.log("tech");
  }
}
class FinanceEmployee {
  workForFinance() {
    console.log("finance");
  }
}
class OperateEmployee {
  workForOperate() {
    console.log("Operate");
  }
}

// 2. примінимо паттерн фасад

class TechEmployee2 {
  employee: Employee;

  constructor(employee: Employee) {
    this.employee = employee;
  }

  workWrapperForTech() {
    this.employee.workForTech();
  }
}

class FinanceEmployee2 {
  employee: Employee;

  constructor(employee: Employee) {
    this.employee = employee;
  }

  workWrapperForFinance() {
    this.employee.workForFinance();
  }
}

class OperateEmployee2 {
  employee: Employee;

  constructor(employee: Employee) {
    this.employee = employee;
  }

  workWrapperForOperate() {
    this.employee.workForOperate();
  }
}
