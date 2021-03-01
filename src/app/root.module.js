import { Module, Router, Store } from 'munster';
import { RootComponent } from './root.component';
import LoginComponent from './login.component.html';
// import { RegisterModule } from './register.module';

const routes = [
  { path: '/login', component: LoginComponent },
  { path: '/register', module: import('./register.module').then(mod => mod.RegisterModule) }
];

const store = {
  state: {
    count: 0
  },
  actions: {
    count: {
      setCount: (current, payload) => {
        return payload;
      }
    }
  }
};

export class RootModule extends Module {

  rootComponent = RootComponent;

  components = [
    LoginComponent
  ];

  // modules = [
  //   RegisterModule
  // ];

  plugins = [
    Router.routes(routes),
    Store.config(store)
  ];

}
