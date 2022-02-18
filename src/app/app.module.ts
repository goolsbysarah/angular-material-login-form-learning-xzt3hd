import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form.component';

import { MaterialModule } from './material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule, MatIconModule, MatToolbarModule],
  declarations: [ AppComponent, LoginFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
}
