import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutMeModule } from '../about-me/about-me.module';
import { ProjectsModule } from '../projects/projects.module';
import { ContactModule } from '../contact/contact.module';


const routes: Routes = [{ path: '', component: HomeComponent },
 ];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AboutMeModule,
    ProjectsModule,
    ContactModule,
    RouterModule.forChild(routes),
  ],
  providers:[],
  exports:[
    RouterModule
  ]
})
export class HomeModule { }
