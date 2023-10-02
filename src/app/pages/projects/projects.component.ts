import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { projectDto } from 'src/app/shared/interface/projects.interface';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  constructor(private route: Router, private projectsService: ProjectsService) {}
  projects: projectDto[] = [];
  
  ngOnInit(): void {
    this.projectsService.getData().subscribe((response: any) => {
      this.projects = response; 
    });
  }

  showDetails(id: number){
    this.route.navigate(['/project-details'], { queryParams: { id: id } })
  }
}
