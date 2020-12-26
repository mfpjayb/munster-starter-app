export class ButtonPlugin {
  static namespace = ['mat:button', 'mat:button-outline', 'mat:button-primary', 'mat:button-primary-outline'];

  constructor() {
    this['mat:button'] = this.matDefault.bind(this);
    this['mat:button-primary'] = this.matPrimary.bind(this);
    this['mat:button-outline'] = this.matDefaultOutline.bind(this);
    this['mat:button-primary-outline'] = this.matPrimaryOutline.bind(this);
  }

  matDefault(name, valueCaller, element) {
    this.addClass(element, 'mat-btn')
    this.addClass(element, 'default')
  }

  matPrimary(name, valueCaller, element) {
    this.addClass(element, 'mat-btn')
    this.addClass(element, 'primary')
  }

  matDefaultOutline(name, valueCaller, element) {
    this.matDefault(name, valueCaller, element);
    this.addClass(element, 'outline')
  }

  matPrimaryOutline(name, valueCaller, element) {
    this.matPrimary(name, valueCaller, element);
    this.addClass(element, 'outline')
  }

  addClass(element, cls) {
    element.classList.add(cls);
  }
}
