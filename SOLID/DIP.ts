// модулі верхніх типів не повинні залежати від модулів нижніх типів
// вони повинні залежати від абстракції
// деталі повинні залежати від абстракцій

interface IService {
  name: string;
}

interface IServiceFactory {
  makeSvc: () => IService;
}

class Application {
  service: IService;

  constructor(service: IService) {
    this.service = service;
  }
}

class ServiceFactory implements IServiceFactory {
  makeSvc: () => { name: "service" };
}

const app = new Application(new ServiceFactory().makeSvc());
