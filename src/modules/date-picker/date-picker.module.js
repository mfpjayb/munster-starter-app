import { Module } from 'munster-module';
import DatePicker from './DatePicker.html';

export class DatePickerModule extends Module {
  prefix = 'mat';
  components = [
    DatePicker
  ];
}