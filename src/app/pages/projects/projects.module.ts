import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component'
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsService } from 'src/app/shared/services/projects.service';
@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    ProjectsService
  ],
  exports:[
    RouterModule,
    ProjectsComponent
  ]
})
export class ProjectsModule { }
