export class InputPlugin {
  static namespace = ['mat:input'];

  constructor() {
    this['mat:input'] = this.mat.bind(this);
  }

  mat(name, valueCaller, targetElement) {
    targetElement.classList.add('mat-input');
  }
}