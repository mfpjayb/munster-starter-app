export class BadgePlugin {
  static namespace = [
    'mat:badge', 'mat:badge-primary', 'mat:badge-danger', 'mat:badge-success',
  ];

  constructor(component) {
    this.component = component;
    this['mat:badge'] = this.matBadge.bind(this);
    this['mat:badge-primary'] = this.matBadgePrimary.bind(this);
    this['mat:badge-danger'] = this.matBadgeDanger.bind(this);
    this['mat:badge-success'] = this.matBadgeSuccess.bind(this);
  }

  setWatcher(element, valueCaller) {

    let value = valueCaller();
    element.innerHTML = value;

    this.component.$watchers.push({
      isUpdated: () => {
        const newValue = valueCaller();
        const isUpdated = value !== newValue;
        value = newValue;
        return isUpdated;
      },
      update: () => {
        element.innerHTML = value;
      },
      isConnected: () => {
        return element.isConnected;
      }
    });
  }

  createBadge(element, valueCaller, type) {
    element.classList.add('mat-badge');
    const span = document.createElement('span');
    span.classList.add('mat-badge-icon');
    span.classList.add(type);
    element.appendChild(span);

    this.setWatcher(span, valueCaller);
  }

  matBadge(name, valueCaller, element) {
    this.createBadge(element, valueCaller, 'default');
  }
  matBadgePrimary(name, valueCaller, element) {
    this.createBadge(element, valueCaller, 'primary');
  }
  matBadgeDanger(name, valueCaller, element) {
    this.createBadge(element, valueCaller, 'danger');
  }
  matBadgeSuccess(name, valueCaller, element) {
    this.createBadge(element, valueCaller, 'success');
  }
}