import { Module } from 'munster-module';
import Card from './Card.html';
import { CardsModule as CModule } from '../../modules/card/cards.module';
import { ButtonsModule } from '../../modules/button/buttons.module';

export class CardModule extends Module {
  root = Card;
  modules = [
    CModule,
    ButtonsModule
  ];
}