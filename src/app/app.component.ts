import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} kishore updated from local</div>`,
})
export class AppComponent {
  value = 'World';
}
