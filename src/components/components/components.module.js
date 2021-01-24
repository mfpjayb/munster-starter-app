import { Module } from 'munster-module';
import { Router } from 'munster-router';
import Component from './Component.html';

const routes = [
  { path: '/components/button', module: import('../button/button.module').then(m => m.ButtonModule) },
  { path: '/components/badge', module: import('../badge/badge.module').then(m => m.BadgeModule) }
];

export class ComponentsModule extends Module {
  root = Component;

  plugins = [
    Router.routes(routes)
  ];
}
