import { Module } from 'munster-module';
import Button from './Button.html';
import { ButtonsModule } from '../../modules/button/buttons.module';

export class ButtonModule extends Module {
  root = Button;
  modules = [
    ButtonsModule
  ];
}
