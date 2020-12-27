export class CheckboxPlugin {
  static namespace = ['mat:checkbox'];

  constructor() {
    this['mat:checkbox'] = this.matCheckbox.bind(this);
  }

  setClick(event, element) {
    event.stopPropagation();
    event.preventDefault();
    element.checked = !element.checked;
  }

  matCheckbox(name, valueCaller, element) {
    const wrapper = document.createElement('span');
    const check = document.createElement('span');
    const box = document.createElement('span');

    wrapper.classList.add('mat-checkbox');
    check.classList.add('mat-checkbox-check');
    box.classList.add('mat-checkbox-box');
    check.innerHTML = '&#x2713;';
    element.classList.add('mat-checkbox-input');

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
}