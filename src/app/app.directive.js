import { Directive } from 'munster';

export class AppDirective extends Directive {
  // static namespace = ['root:*'];
  static namespace = ['app:color', 'app:*'];

  constructor(component) {
    super();
    this.component = component;
  }

  appAll(name, valueCaller, element) {
    this.$watch(valueCaller, element, () => {
      const value = valueCaller();
      console.log('all');
      // console.log(name);
      // console.log(value);
      // console.log(element);
    });
  }

  appColor(name, valueCaller, element) {
    // console.log('color here');
    // console.log(name);
    // console.log(valueCaller());
    // console.log(element);
  }

}