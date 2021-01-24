import { Module } from 'munster-module';
import Badge from './badge.html';
import { BadgeModule as BModule } from '../../modules/badge/badge.module';

export class BadgeModule extends Module {
  root = Badge;
  modules = [
    BModule
  ];
}