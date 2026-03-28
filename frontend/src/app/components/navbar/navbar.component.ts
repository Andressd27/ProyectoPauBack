import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;

  navLinks = [
    { label: 'Inicio', anchor: '#hero' },
    { label: 'El Viaje', anchor: '#towns' },
    { label: 'Galería', anchor: '#gallery' },
    { label: 'Confirmar', anchor: '#rsvp' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 60;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768 && this.menuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollTo(anchor: string) {
    this.closeMenu();
    const el = document.querySelector(anchor);
    if (el) {
      // Let the mobile menu start closing before smooth scroll to avoid visual overlap.
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  }
}
