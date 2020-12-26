import { Module } from 'munster-module';
import { BadgePlugin } from './BadgePlugin';

export class BadgeModule extends Module {
  exportPlugins = [
    BadgePlugin
  ];
}