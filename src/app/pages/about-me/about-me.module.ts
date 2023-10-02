import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component'
import { Routes, RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[],
  exports:[
    RouterModule,
    AboutMeComponent
  ]
})
export class AboutMeModule { }
