import { Component } from 'munster';
import Template from './root.component.html';
import Style from './root.component.css';

@Component({
  template: Template,
  style: Style
})
export class RootComponent {

  counter = 0;

  clickMe() {
    this.counter++;
    this.$store.count.dispatch('setCount', this.counter);
  }
}