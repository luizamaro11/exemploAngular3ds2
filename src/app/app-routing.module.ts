import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const rotas = [

]

import { AppComponent } from './app.component';

import { SomarModule } from './somar';
@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
