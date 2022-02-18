import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <my-login-form (menu)='open($event)'>Your Form</my-login-form>
  
  `,
  styles: []
})
export class AppComponent  {

}
