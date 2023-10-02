import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private scrollService: ScrollService, private themeService: ThemeService, private router : Router) {}
  darkMode: boolean = false;
  
  ngOnInit(): void {
    
   this.darkMode = this.themeService.getDarkMode()
  }
  scrollToSection(sectionId: string) {
    if(this.router.url !== '/home'){
      this.router.navigate(['/home']);
      setTimeout(() => {
        this.scrollService.scrollToElement(sectionId);
      }, 1);
    }
    else{

      this.scrollService.scrollToElement(sectionId);
    }
  }
  toggleTheme(){
    this.themeService.toggleDarkMode();
   this.darkMode = this.themeService.getDarkMode()
  }

 burgerClick(){
  
 const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
 const smallMenu = document.querySelector('.header__sm-menu')
 const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
 const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')
 const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
  if (smallMenu?.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu?.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn?.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn?.classList.add('d-none')
  } else {
    headerHamMenuBtn?.classList.add('d-none')
    headerHamMenuCloseBtn?.classList.remove('d-none')
  }
  for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener('click', () => {
      smallMenu?.classList.remove('header__sm-menu--active')
      headerHamMenuBtn?.classList.remove('d-none')
      headerHamMenuCloseBtn?.classList.add('d-none')
    })
  }
}

}
