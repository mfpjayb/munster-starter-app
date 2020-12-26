export class ButtonPlugin {
  static namespace = [
    'mat:button', 'mat:button-primary', 'mat:button-danger', 'mat:button-success',
    'mat:button-outline', 'mat:button-outline-primary', 'mat:button-outline-danger', 'mat:button-outline-success',
    'mat:button-raised', 'mat:button-raised-primary', 'mat:button-raised-danger', 'mat:button-raised-success',
  ];

  constructor() {
    this['mat:button'] = this.matDefault.bind(this);
    this['mat:button-primary'] = this.matPrimary.bind(this);
    this['mat:button-danger'] = this.matDanger.bind(this);
    this['mat:button-success'] = this.matSuccess.bind(this);

    this['mat:button-outline'] = this.matOutline.bind(this);
    this['mat:button-outline-primary'] = this.matOutlinePrimary.bind(this);
    this['mat:button-outline-danger'] = this.matOutlineDanger.bind(this);
    this['mat:button-outline-success'] = this.matOutlineSuccess.bind(this);

    this['mat:button-raised'] = this.matRaised.bind(this);
    this['mat:button-raised-primary'] = this.matRaisedPrimary.bind(this);
    this['mat:button-raised-danger'] = this.matRaisedDanger.bind(this);
    this['mat:button-raised-success'] = this.matRaisedSuccess.bind(this);
  }

  addClass(element, classArray) {
    classArray.forEach(cls => element.classList.add(cls));
  }

  matDefault(name, valueCaller, element) {
    this.addClass(element, ['mat-btn', 'default']);
  }
  matPrimary(name, valueCaller, element) {
    this.addClass(element, ['mat-btn', 'primary']);
  }
  matDanger(name, valueCaller, element) {
    this.addClass(element, ['mat-btn', 'danger']);
  }
  matSuccess(name, valueCaller, element) {
    this.addClass(element, ['mat-btn', 'success']);
  }

  matOutline(name, valueCaller, element) {
    this.addClass(element, ['mat-btn', 'default', 'outline']);
  }
  matOutlinePrimary(name, valueCaller, element) {
    this.addClass(element, ['mat-btn', 'primary', 'outline']);
  }
  matOutlineDanger(name, valueCaller, element) {
    this.addClass(element, ['mat-btn', 'danger', 'outline']);
  }
  matOutlineSuccess(name, valueCaller, element) {
    this.addClass(element, ['mat-btn', 'success', 'outline']);
  }

  matRaised(name, valueCaller, element) {
    this.addClass(element, ['mat-btn', 'default', 'raised']);
  }
  matRaisedPrimary(name, valueCaller, element) {
    this.addClass(element, ['mat-btn', 'primary', 'raised']);
  }
  matRaisedDanger(name, valueCaller, element) {
    this.addClass(element, ['mat-btn', 'danger', 'raised']);
  }
  matRaisedSuccess(name, valueCaller, element) {
    this.addClass(element, ['mat-btn', 'success', 'raised']);
  }
}
