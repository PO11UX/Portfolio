import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component'
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[],
  exports:[
    RouterModule,
    ContactComponent
  ]
})
export class ContactModule { }
