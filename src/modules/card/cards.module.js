import { Module } from 'munster-module';
import Card from './Card.html';

export class CardsModule extends Module {
  prefix = 'mat';
  components = [
    Card
  ];
}
