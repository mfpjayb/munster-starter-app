import './style.css';
import { initModule } from 'munster';
import { RootModule } from './app/root.module';

// const routes = [
//   { path: '/ui-kit', component: UIKit },
//   { path: '/login', module: LoginModule }, // eager loading module
//   { path: '/register', module: import('./components/register/register.module').then(mod => mod.RegisterModule) }, // Lazy loading module
//   { path: '/components', module: import('./components/components/components.module').then(mod => mod.ComponentsModule) }
// ];

initModule(RootModule);
