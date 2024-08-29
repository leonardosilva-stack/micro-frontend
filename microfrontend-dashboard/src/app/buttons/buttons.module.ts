  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ButtonsComponent } from './buttons.component';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouterModule } from '@angular/router';
  import { ButtonModule } from 'primeng/button';

  @NgModule({
    declarations: [
      ButtonsComponent
    ],
    imports: [CommonModule, ButtonModule, BrowserModule, RouterModule.forChild([
      {
        path: '',
        component: ButtonsComponent
      }
    ])],
    exports: [
      ButtonsComponent
    ]
  })
  export class ButtonsModule { }
