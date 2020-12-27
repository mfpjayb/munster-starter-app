import { Module } from 'munster-module';
import { CheckboxPlugin } from './CheckboxPlugin';

export class CheckboxModule extends Module {
  exportPlugins = [
    CheckboxPlugin
  ];
}
