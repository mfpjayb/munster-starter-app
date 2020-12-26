import { Module } from 'munster-module';
import { InputPlugin } from './InputPlugin';

export class InputsModule extends Module {
  exportPlugins = [
    InputPlugin
  ];
}