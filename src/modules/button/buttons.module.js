import { Module } from 'munster-module';
import { ButtonPlugin } from './ButtonPlugin';

export class ButtonsModule extends Module {
  exportPlugins = [
    ButtonPlugin
  ];
}