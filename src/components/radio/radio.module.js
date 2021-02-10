import { Module } from 'munster-module';
import Root from './Radio.html';
import { RadioModule as RModule } from '../../modules/radio/radio.module';

export class RadioModule extends Module {
  root = Root;
  modules = [
    RModule
  ];
}