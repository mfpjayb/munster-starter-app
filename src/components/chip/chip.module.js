import { Module } from 'munster-module';
import { Props } from 'munster-props';
import Chip from './Chip.html';
import { ChipsModule as CModule } from '../../modules/chips/chips.module';

export class ChipModule extends Module {
  root = Chip;
  modules = [
    CModule
  ];
  plugins = [
    Props
  ];
}
