import { Module } from 'munster';
import { RootComponent } from './root.component';

export class RootModule extends Module {

  prefix = 'app';

  rootComponent = RootComponent;

  components = [ ];

  modules = [ ];

  plugins = [ ];

}
