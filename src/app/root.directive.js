import { Directive, createWatcher } from 'munster';

export class RootDirective extends Directive {
  // static namespace = ['root:*'];
  static namespace = ['root:color', 'onNamespaceNotFound', 'root:*'];

  constructor(component) {
    super(component, RootDirective.namespace);
    this.component = component;
  }

  rootAll(name, valueCaller, element) {
    this.$watch(valueCaller, element, () => {
      const value = valueCaller();
      console.log(name);
      console.log(value);
      console.log(element);
    });
  }

  rootColor(name, valueCaller, element) {
    console.log('color here');
    // console.log(name);
    // console.log(valueCaller());
    // console.log(element);
  }

  onNamespaceNotFound(name, valueCaller, element) {
    // console.log(name, valueCaller, element, 'namespace not found');
  }

}