import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { projectDto} from 'src/app/shared/interface/projects.interface'

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit{
  constructor(private projectService: ProjectsService, private activeRoute : ActivatedRoute) {}
  projectDetails: projectDto = new projectDto();
  objectId: number = parseInt(this.activeRoute.snapshot.queryParams['id']);
  ngOnInit(): void {
    
    this.projectService.getObjectById(this.objectId).subscribe((response: any) => {
      this.projectDetails = response    
    });
  }
}
