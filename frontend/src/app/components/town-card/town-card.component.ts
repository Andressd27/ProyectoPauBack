import { Component, Input } from '@angular/core';
import { Town } from '../../models/town.model';

@Component({
  selector: 'app-town-card',
  templateUrl: './town-card.component.html',
  styleUrls: ['./town-card.component.scss'],
})
export class TownCardComponent {
  @Input() town!: Town;
  @Input() index: number = 0;
  flipped = false;

  private readonly localImages: Record<string, string> = {
    Tunja: 'assets/tunja.jpg',
    Firavitoba: 'assets/firavitoba.jpg',
    Sogamoso: 'assets/sogamoso.jpg',
    Duitama: 'assets/duitama.jpg',
    'Laguna de Tota': 'assets/lagunatota.jpg',
    'Villa de Leyva': 'assets/villaleiva.jpg',
    'Ráquira': 'assets/raquira.jpg',
    'Sáchica': 'assets/sachica.jpg',
    Paipa: 'assets/paipa.jpg',
  };

  toggle() {
    this.flipped = !this.flipped;
  }

  getImageUrl(): string {
    const localImage = this.localImages[this.town.name];
    if (localImage) {
      return localImage;
    }

    // Use picsum photos seeded by town id for consistent images
    return `https://picsum.photos/seed/${this.town.id + 100}/600/400`;
  }
}
