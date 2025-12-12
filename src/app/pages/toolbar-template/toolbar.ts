import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {
dropdownOpen = false;
menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
  if (!this.menuOpen) {
    this.dropdownOpen = false;
  }
}

toggleDropdown() {
  this.dropdownOpen = !this.dropdownOpen;
}
closeDropdown() {
  this.dropdownOpen = false;
    this.menuOpen = false;
}
isDesktop(): boolean {
  return window.innerWidth >= 768;
}
ngOnInit() {
  window.addEventListener('resize', () => {
    if (this.isDesktop()) {
      this.dropdownOpen = false; // Luk dropdown på desktop ved resize
    }
  });
}
}