import { Directive, createWatcher } from 'munster';

export class RootDirective extends Directive {
  static namespace = ['root:color', 'root:*'];

  rootAll(name, valueCaller, element) {
    this.$watch(valueCaller, element, () => {
      const value = valueCaller();
      console.log('all');
      // console.log(name);
      // console.log(value);
      // console.log(element);
    });
  }

  rootColor(name, valueCaller, element) {
    // console.log('color here');
    // console.log(name);
    // console.log(valueCaller());
    // console.log(element);
  }

}