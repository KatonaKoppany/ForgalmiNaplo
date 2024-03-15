import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  alert(message: string, type: string, icon: string): void {
    let alertplaceholder = document.getElementById('alertplaceholder');
    let wrapper = document.createElement('div');
    wrapper.innerHTML = `<div class="animate__animated animate__fadeInDown animate__delay-0s animate__faster alert alert-${type} alert-dismissible fade show"  role="alert"><i class="material-icons alert-icon">${icon}</i>${message}</div>`;

    alertplaceholder?.append(wrapper);
    setTimeout(function () {
      wrapper.innerHTML = `<div class="animate__animated animate__fadeOutUp animate__delay-0s animate__faster alert alert-${type} alert-dismissible fade show"  role="alert"><i class="material-icons alert-icon">${icon}</i>${message}</div>`;
      setTimeout(() => {
        wrapper.remove();
      }, 1000);
    }, 5000);
  }
}
