import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private isDarkMode = false;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    // Check localStorage for saved preference
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    // Apply the theme based on the saved preference
    this.applyTheme();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    // Save the preference in localStorage
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  private applyTheme(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

  getDarkMode(): boolean {
    return this.isDarkMode;
  }
}