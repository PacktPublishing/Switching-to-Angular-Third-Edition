import { Injector } from '@angular/core';

class Http { }

class UserService {
  constructor(public http: Http) { }
}

const parentInjector = Injector.create([{
  provide: Http,
  deps: [],
  useFactory() {
    return new Http();
  }
}]);

const childInjector = Injector.create([{
  provide: UserService,
  deps: [Http],
  useFactory(http) {
    return new UserService(http);
  }
}], parentInjector);

console.log(childInjector.get(UserService));
console.log(childInjector.get(Http) === parentInjector.get(Http));
