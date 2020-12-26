import './style.css';
import { Module, initModule } from 'munster-module';
import { Router } from 'munster-router';
import Root from './Root.html';
import UIKit from './components/ui-kit/UIKit.html';
import { ButtonsModule } from './modules/button/buttons.module';
import { InputsModule } from './modules/input/inputs.module';
import { CardsModule } from './modules/card/cards.module';

const routes = [
  { path: 'ui-kit', component: UIKit }
];

class MainModule extends Module {

  root = Root;

  components = [
    UIKit
  ];

  modules = [
    ButtonsModule,
    InputsModule,
    CardsModule
  ];

  plugins = [
    Router.routes(routes)
  ];

}

initModule(MainModule);