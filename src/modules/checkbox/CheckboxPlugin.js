export class CheckboxPlugin {
  static namespace = ['mat:checkbox', 'mat:checkbox-primary', 'mat:checkbox-danger', 'mat:checkbox-success'];

  constructor() {
    this['mat:checkbox'] = this.matCheckbox.bind(this);
    this['mat:checkbox-primary'] = this.matCheckboxPrimary.bind(this);
    this['mat:checkbox-danger'] = this.matCheckboxDanger.bind(this);
    this['mat:checkbox-success'] = this.matCheckboxSuccess.bind(this);
  }

  setClick(event, element) {
    event.stopPropagation();
    event.preventDefault();
    element.checked = !element.checked;
  }

  generateCheckbox(valueCaller, element, type) {
    const wrapper = document.createElement('span');
    const check = document.createElement('span');
    const box = document.createElement('span');

    wrapper.classList.add('mat-checkbox');
    wrapper.classList.add(type);
    check.classList.add('mat-checkbox-check');
    box.classList.add('mat-checkbox-box');
    check.innerHTML = '&#x2713;';
    element.classList.add('mat-checkbox-input');
    element.type = 'checkbox';

    wrapper.appendChild(box);
    wrapper.appendChild(check);

    wrapper.addEventListener('click', event => this.setClick(event, element));

    setTimeout(() => {
      if (valueCaller()) {
        const label = document.createElement('label');
        label.innerHTML = valueCaller();
        label.classList.add('mat-checkbox-label');
        label.addEventListener('click', event => this.setClick(event, element));
        element.after(label);
      }
      element.after(wrapper);
    });
  }

  matCheckbox(name, valueCaller, element) {
    this.generateCheckbox(valueCaller, element, 'default');
  }
  matCheckboxPrimary(name, valueCaller, element) {
    this.generateCheckbox(valueCaller, element, 'primary');
  }
  matCheckboxDanger(name, valueCaller, element) {
    this.generateCheckbox(valueCaller, element, 'danger');
  }
  matCheckboxSuccess(name, valueCaller, element) {
    this.generateCheckbox(valueCaller, element, 'success');
  }
}