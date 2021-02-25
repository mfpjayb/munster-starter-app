import Template from './root.component.html';

export class RootComponent extends Template {
  counter = 0;

  clickMe() {
    console.log('Hello World');
    this.counter++;
  }
}
