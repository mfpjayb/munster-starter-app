import { Module } from 'munster-module';
import Checkbox from './Checkbox.html';
import { CheckboxModule as CModule } from '../../modules/checkbox/checkbox.module';

export class CheckboxModule extends Module {
  root = Checkbox;
  modules = [
    CModule
  ];
}