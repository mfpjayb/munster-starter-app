import { Module } from 'munster-module';
import { RadioPlugin } from './RadioPlugin';

export class RadioModule extends Module {
  exportPlugins = [
    RadioPlugin
  ];
}