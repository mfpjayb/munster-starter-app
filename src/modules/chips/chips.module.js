import { Module } from 'munster-module';
import Chip from './Chip.html';

export class ChipsModule extends Module {
  prefix = 'mat';
  components = [
    Chip
  ];
}