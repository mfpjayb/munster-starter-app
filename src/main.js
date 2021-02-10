import './style.css';
import './modules/material.css';
import { Module, initModule } from 'munster-module';
import { Props } from 'munster-props';
import { Router } from 'munster-router';
import Root from './Root.html';
import Sidebar from './components/Sidebar.html';
import UIKit from './components/ui-kit/UIKit.html';
import { ButtonsModule } from './modules/button/buttons.module';
import { InputsModule } from './modules/input/inputs.module';
import { CardsModule } from './modules/card/cards.module';
import { LoginModule } from './components/login/login.module';
import { BadgeModule } from './modules/badge/badge.module';
import { CheckboxModule } from './modules/checkbox/checkbox.module';
import { RadioModule } from './modules/radio/radio.module';
import { ChipsModule } from './modules/chips/chips.module';
import { DatePickerModule } from './modules/date-picker/date-picker.module';

const routes = [
  { path: '/ui-kit', component: UIKit },
  { path: '/login', module: LoginModule }, // eager loading module
  { path: '/register', module: import('./components/register/register.module').then(mod => mod.RegisterModule) }, // Lazy loading module
  { path: '/components', module: import('./components/components/components.module').then(mod => mod.ComponentsModule) }
];

class MainModule extends Module {

  root = Root;

  components = [
    UIKit,
    Sidebar
  ];

  modules = [
    ButtonsModule,
    InputsModule,
    CardsModule,
    BadgeModule,
    CheckboxModule,
    RadioModule,
    ChipsModule,
    DatePickerModule
  ];

  plugins = [
    Router.routes(routes),
    Props
  ];

}

initModule(MainModule);