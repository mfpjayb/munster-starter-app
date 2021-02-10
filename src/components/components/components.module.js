import { Module } from 'munster-module';
import { Router } from 'munster-router';
import Component from './Component.html';

const routes = [
  { path: '/components/button', module: import('../button/button.module').then(m => m.ButtonModule) },
  { path: '/components/badge', module: import('../badge/badge.module').then(m => m.BadgeModule) },
  { path: '/components/card', module: import('../card/card.module').then(m => m.CardModule) },
  { path: '/components/checkbox', module: import('../checkbox/checkbox.module').then(m => m.CheckboxModule) },
  { path: '/components/radio', module: import('../radio/radio.module').then(m => m.RadioModule) },
  { path: '/components/chip', module: import('../chip/chip.module').then(m => m.ChipModule) },
  { path: '/components/date-picker', module: import('../date-picker/date-picker.module').then(m => m.DatePickerModule) },
  { path: '/components/input', module: import('../input/input.module').then(m => m.InputModule) }
];

export class ComponentsModule extends Module {
  root = Component;

  plugins = [
    Router.routes(routes)
  ];
}
