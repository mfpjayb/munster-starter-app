import { Module } from 'munster';
import { RootComponent } from './root.component';
import { RootDirective } from './root.directive';
import SingleFileComponent from './single-file.component.html';

export class RootModule extends Module {

  prefix = 'app';

  rootComponent = RootComponent;

  components = [
    SingleFileComponent
  ];

  modules = [ ];

  plugins = [
    RootDirective
  ];

}
