import { Module } from 'munster-module';
import { Router } from 'munster-router';
import { ButtonsModule } from '../../modules/button/buttons.module';
import { CardsModule } from '../../modules/card/cards.module';
import { InputsModule } from '../../modules/input/inputs.module';
import Register from './Register.html';
import RegisterPage from './RegisterPage.html';

const routes = [
  { path: '/register', component: RegisterPage }
];

export class RegisterModule extends Module {
  root = Register;

  components = [
    RegisterPage
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