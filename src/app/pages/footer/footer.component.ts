import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private scrollService: ScrollService) {}

  
  ngOnInit(): void {}
  scrollToSection(sectionId: string) {
    this.scrollService.scrollToElement(sectionId);
  }
}
