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
    if (!this.counter) {
      this.counter = 0;
    }
    this.counter++;
  }
}
