import { Component } from '@angular/core';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  emoji: string;
  imageId: number;
  imagePath?: string;
  span?: 'wide' | 'tall' | 'normal';
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  selectedImage: GalleryItem | null = null;

  items: GalleryItem[] = [
    { id: 1, title: 'Páramos Eternos', description: 'Los páramos boyacenses, hábitat del oso de anteojos y el cóndor', emoji: '🦅', imageId: 1024, imagePath: 'assets/paramo.jpg', span: 'wide' },
    { id: 2, title: 'Arquitectura Colonial', description: 'Calles empedradas que cuentan historias de siglos', emoji: '🏛️', imageId: 1040, imagePath: 'assets/tunjavertical.jpg', span: 'tall' },
    { id: 3, title: 'Laguna de Tota', description: 'El espejo más alto de Colombia', emoji: '🐟', imageId: 1018, imagePath: 'assets/lagun4X4.jpg', span: 'normal' },
    { id: 4, title: 'Colibríes en Vuelo', description: 'Las joyas voladoras de los Andes', emoji: '🐦', imageId: 1080, imagePath: 'assets/colibri.jpeg', span: 'normal' },
    { id: 5, title: 'Villa de Leyva', description: 'La plaza más grande de Colombia te espera', emoji: '🌸', imageId: 1015, imagePath: 'assets/plazavillaleiva.jpg', span: 'wide' },
    { id: 6, title: 'Arte en Ráquira', description: 'Cerámica artesanal de colores vibrantes', emoji: '🦋', imageId: 1062, imagePath: 'assets/arteraquira.jpg', span: 'normal' },
    { id: 7, title: 'Cóndor Majestuoso', description: 'El ave nacional vuela libre sobre los Andes', emoji: '🦅', imageId: 1033, imagePath: 'assets/condor.jpeg', span: 'normal' },
    { id: 8, title: 'Viñedos de Sáchica', description: 'Vinos únicos entre colinas doradas', emoji: '🦊', imageId: 1055, imagePath: 'assets/viñedosachica.jpg', span: 'tall' },
    { id: 9, title: 'Atardecer Andino', description: 'Cielos que pintan la Tierra con fuego', emoji: '🌺', imageId: 1016, imagePath: 'assets/atarceder.jpg', span: 'normal' },
    { id: 10, title: 'Termales de Paipa', description: 'Aguas cálidas y descanso en el corazón de Boyacá', emoji: '♨️', imageId: 1098, imagePath: 'assets/termales.jpg', span: 'wide' },
  ];

  getImageUrl(item: GalleryItem): string {
    if (item.imagePath) {
      return item.imagePath;
    }

    return `https://picsum.photos/seed/${item.imageId}/800/600`;
  }

  openImage(item: GalleryItem) {
    this.selectedImage = item;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
