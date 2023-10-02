import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { SkillsService } from 'src/app/shared/services/skills.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit{
  constructor(private scrollService: ScrollService, private skillsService: SkillsService) {}
  skills: any[] = [];
  
  ngOnInit(): void {
    this.skillsService.getData().subscribe((response: any) => {
      this.skills = response.items; 
    });
  }
  scrollToSection(sectionId: string) { 
    this.scrollService.scrollToElement(sectionId);
  }
}
