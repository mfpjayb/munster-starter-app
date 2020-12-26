import { Module } from 'munster-module';
import { Router } from 'munster-router';
import Login from './login.html';
import LoginPage from './LoginPage.html';
import { CardsModule } from '../../modules/card/cards.module';
import { ButtonsModule } from '../../modules/button/buttons.module';
import { InputsModule } from '../../modules/input/inputs.module';

const routes = [
  { path: '/login', component: LoginPage }
];

export class LoginModule extends Module {

  root = Login;

  components = [
    LoginPage
  ];

  modules = [
    CardsModule,
    ButtonsModule,
    InputsModule
  ];

  plugins = [
    Router.routes(routes)
  ];

}