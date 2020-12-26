import { Module } from 'munster-module';
import Button from './Button.html';

export class ButtonsModule extends Module {
  prefix = 'mat';
  components = [
    Button
  ];
}