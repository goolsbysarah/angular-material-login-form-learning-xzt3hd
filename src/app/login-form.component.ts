import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-login-form',
  template: `
      <mat-card>
            <mat-card-title>Log In</mat-card-title>
      <mat-card-content>
        <form [formGroup]="form" (ngSubmit)="submit()">
          <p>
            <mat-form-field>
              <input type="text" matInput placeholder="Username" formControlName="username">
            </mat-form-field>
          </p>

          <p>
            <mat-form-field>
              <input type="password" matInput placeholder="Password" formControlName="password">
            </mat-form-field>
          </p>

          

    
        <button class="register" mat-raised-button>Log In</button>


        </form>
      </mat-card-content>
    </mat-card>

    <mat-toolbar>
      
<button class="home">
  <mat-icon>home</mat-icon>
</button>
<span class="example-spacer"></span>


</mat-toolbar>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        margin: 100px 0px;
      }

      .mat-form-field {
        width: 100%;
        min-width: 300px;
      }

      mat-card-title,
      mat-card-content {
        display: flex;
        justify-content: center;
      }

      mat-raised-button {
        display: flex;
        justify-content: flex-end;
        background-color: #BDC6D9;

      }
      .register {
        color: white;
        background-color: #52688F;
        justify-context: flex-end;
        float: right;
      }
      .mat-toolbar{
        position: fixed;
        bottom: 0; 
        left: 0%;
        color: white;
        background-color: #E3E7F1;
      
      }
      
      .create {
        color: #52688F;
        border: none;
        background-color: #E3E7F1;
        float: right;
        
        
      }
      .home {
        color: #52688F;
        border: none;
        background-color: #E3E7F1;
        
      }
      
      .example-spacer {
      
        flex: 1 1 auto;
      }

    `,
  ],
})
export class LoginFormComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
