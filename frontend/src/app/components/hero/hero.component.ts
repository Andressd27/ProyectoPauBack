import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  animals = ['🦋', '🌺', '🦜', '🌿', '🦅', '🌸', '🐆', '🌼'];

  scrollToTowns() {
    const el = document.querySelector('#towns');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToRsvp() {
    const el = document.querySelector('#rsvp');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
