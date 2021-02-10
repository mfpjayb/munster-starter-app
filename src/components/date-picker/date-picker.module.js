import { Module } from 'munster-module';
import DatePicker from './DatePicker.html';
import { Props } from 'munster-props';
import { DatePickerModule as DModule } from '../../modules/date-picker/date-picker.module';

export class DatePickerModule extends Module {
  root = DatePicker;
  modules = [
    DModule
  ];
  plugins = [
    Props
  ];
}

