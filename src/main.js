import './style.css';
import './modules/material.css';
import { Module, initModule } from 'munster-module';
import { Router } from 'munster-router';
import Root from './Root.html';
import UIKit from './components/ui-kit/UIKit.html';
import { ButtonsModule } from './modules/button/buttons.module';
import { InputsModule } from './modules/input/inputs.module';
import { CardsModule } from './modules/card/cards.module';
import { LoginModule } from './components/login/login.module';
import { BadgeModule } from './modules/badge/badge.module';
import { CheckboxModule } from './modules/checkbox/checkbox.module';
import { RadioModule } from './modules/radio/radio.module';

const routes = [
  { path: '/ui-kit', component: UIKit },
  { path: '/login', module: LoginModule }, // eager loading module
  { path: '/register', module: import('./components/register/register.module').then(mod => mod.RegisterModule) }, // Lazy loading module
];

class MainModule extends Module {

  root = Root;

  components = [
    UIKit
  ];

  modules = [
    ButtonsModule,
    InputsModule,
    CardsModule,
    BadgeModule,
    CheckboxModule,
    RadioModule
  ];

  plugins = [
    Router.routes(routes)
  ];

}

initModule(MainModule);