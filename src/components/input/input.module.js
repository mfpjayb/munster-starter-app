import { Module } from 'munster-module';
import Input from './Input.html';
import { InputsModule as IModule } from '../../modules/input/inputs.module';

export class InputModule extends Module {
  root = Input;
  modules = [
    IModule,
  ];
}
