import { Module, Props } from 'munster';
import { RootComponent } from './root.component';
import { RootDirective } from './root.directive';
import { AppDirective } from './app.directive';
import SingleFileComponent from './single-file.component.html';

export class RootModule extends Module {

  prefix = 'app';

  rootComponent = RootComponent;

  components = [
    SingleFileComponent
  ];

  modules = [ ];

  plugins = [
    RootDirective,
    AppDirective,
    Props
  ];

}
