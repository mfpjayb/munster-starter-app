import { Module } from 'munster';
import { RootComponent } from './root.component';

export class RootModule extends Module {
  rootComponent = RootComponent;

  modules       = [];
  plugins       = [];
  components    = [];
  exportPlugins = [];
}
