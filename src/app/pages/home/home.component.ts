import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private scrollService : ScrollService){}
  ngOnInit(): void {
  }
  scrollToSection(sectionId: string) {
  

      this.scrollService.scrollToElement(sectionId);
  }
}
