export class RadioPlugin {
  static namespace = ['mat:radio', 'mat:radio-primary', 'mat:radio-danger', 'mat:radio-success'];

  constructor() {
    this['mat:radio'] = this.matRadio.bind(this);
    this['mat:radio-primary'] = this.matRadioPrimary.bind(this);
    this['mat:radio-danger'] = this.matRadioDanger.bind(this);
    this['mat:radio-success'] = this.matRadioSuccess.bind(this);
  }

  setClick(event, element) {
    event.stopPropagation();
    event.preventDefault();
    element.checked = !element.checked;
  }

  generateRadio(valueCaller, element, type) {
    const wrapper = document.createElement('span');
    const check = document.createElement('span');
    const box = document.createElement('span');

    wrapper.classList.add('mat-radio');
    wrapper.classList.add(type);
    check.classList.add('mat-radio-check');
    box.classList.add('mat-radio-circle');
    element.classList.add('mat-radio-input');
    element.type = 'radio';

    wrapper.appendChild(box);
    wrapper.appendChild(check);

    wrapper.addEventListener('click', event => this.setClick(event, element));

    setTimeout(() => {
      if (valueCaller()) {
        const label = document.createElement('label');
        label.innerHTML = valueCaller();
        label.classList.add('mat-radio-label');
        label.addEventListener('click', event => this.setClick(event, element));
        element.after(label);
      }
      element.after(wrapper);
    });
  }

  matRadio(name, valueCaller, element) {
    this.generateRadio(valueCaller, element, 'default');
  }
  matRadioPrimary(name, valueCaller, element) {
    this.generateRadio(valueCaller, element, 'primary');
  }
  matRadioDanger(name, valueCaller, element) {
    this.generateRadio(valueCaller, element, 'danger');
  }
  matRadioSuccess(name, valueCaller, element) {
    this.generateRadio(valueCaller, element, 'success');
  }
}