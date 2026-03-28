import { Injectable } from '@nestjs/common';
import { Town } from './towns.dto';

@Injectable()
export class TownsService {
  private towns: Town[] = [
    {
      id: 1,
      name: 'Tunja',
      description:
        'La majestuosa capital de Boyacá, guardiana de siglos de historia colonial. Sus calles empedradas y templos barrocos te harán sentir el latido de la historia patria. ¡Un paraíso para los amantes de la arquitectura y la cultura!',
      emoji: '🏛️',
      animal: 'Cóndor de los Andes',
      animalEmoji: '🦅',
      highlights: ['Catedral de Santiago de Tunja', 'Casa del Fundador', 'Pozo de Donato', 'Iglesia de Santo Domingo'],
      distance: '147 km desde Bogotá',
      climate: 'Frío andino – 12°C promedio',
      imageKeyword: 'tunja,colombia,colonial',
      color: '#264653',
    },
    {
      id: 2,
      name: 'Firavitoba',
      description:
        'Firavitoba es un pueblo tradicional de Boyacá con arquitectura colonial, calles tranquilas y una identidad campesina muy marcada. Su imponente templo y los paisajes verdes de su entorno lo convierten en una parada llena de historia y calma.',
      emoji: '⛪',
      animal: 'Lechuza Andina',
      animalEmoji: '🦉',
      highlights: ['Basílica Menor de Nuestra Señora de las Nieves', 'Parque principal colonial', 'Miradores rurales', 'Gastronomía boyacense'],
      distance: '194 km desde Bogotá',
      climate: 'Fresco andino – 13°C promedio',
      imageKeyword: 'firavitoba,boyaca,colonial',
      color: '#457B9D',
    },
    {
      id: 3,
      name: 'Sogamoso',
      description:
        'La ciudad del Sol, hogar del pueblo Muisca y guardianes del fuego sagrado. Con su impresionante Museo Arqueológico, Sogamoso es donde la historia y la naturaleza conviven en perfecta armonía entre cóndores y horizontes dorados.',
      emoji: '☀️',
      animal: 'Tucan Andino',
      animalEmoji: '🦜',
      highlights: ['Museo Arqueológico Muisca', 'Templo del Sol', 'Lago de Tota cercano', 'Mercado artesanal'],
      distance: '215 km desde Bogotá',
      climate: 'Templado soleado – 17°C promedio',
      imageKeyword: 'sogamoso,colombia,sun',
      color: '#E9C46A',
    },
    {
      id: 4,
      name: 'Duitama',
      description:
        'La Perla de Boyacá, ciudad de flores y trigos dorados. Duitama es conocida por sus cultivos espectaculares y la calidez de su gente. Por sus praderas galopa libremente el caballo de paso fino colombiano.',
      emoji: '🌸',
      animal: 'Caballo de Paso Fino',
      animalEmoji: '🐎',
      highlights: ['Festival del Viento', 'Parque Olaya Herrera', 'Laguna de Sochagota', 'Haciendas coloniales'],
      distance: '188 km desde Bogotá',
      climate: 'Agradable – 15°C promedio',
      imageKeyword: 'duitama,flowers,colombia',
      color: '#F4A261',
    },
    {
      id: 5,
      name: 'Laguna de Tota',
      description:
        'El lago más alto y extenso de Colombia, un espejo de cielo a 3.015 metros sobre el nivel del mar. Sus aguas cristalinas color esmeralda albergan la trucha arcoíris y las gaviotas andinas que danzan con el viento.',
      emoji: '🏔️',
      animal: 'Trucha Arcoíris',
      animalEmoji: '🐟',
      highlights: ['Playas de arena blanca', 'Deportes acuáticos', 'Atardecer sobre las aguas', 'Cultivos de cebolla'],
      distance: '230 km desde Bogotá',
      climate: 'Muy frío – 8°C promedio',
      imageKeyword: 'laguna,tota,lake,colombia',
      color: '#52B788',
    },
    {
      id: 6,
      name: 'Villa de Leyva',
      description:
        'El pueblo más hermoso de Colombia, con su enorme plaza empedrada, calles blancas y el silencio que solo interrumpen los colibríes y mariposones. Un lugar fuera del tiempo donde cada piedra cuenta una historia de amor.',
      emoji: '🏰',
      animal: 'Colibrí Multicolor',
      animalEmoji: '🐦',
      highlights: ['Plaza Mayor (la más grande de Colombia)', 'Pozos Azules', 'El Fósil', 'Museo del Desierto'],
      distance: '157 km desde Bogotá',
      climate: 'Cálido seco – 18°C promedio',
      imageKeyword: 'villa de leyva,colombia,colonial',
      color: '#E76F51',
    },
    {
      id: 7,
      name: 'Ráquira',
      description:
        'El pueblo de las artesanías, donde cada casa es un arcoíris de colores y cada rincón huele a arcilla y creatividad. La mariposa monarca hace parada aquí en su viaje épico, igual que los viajeros enamorados.',
      emoji: '🎨',
      animal: 'Mariposa Monarca',
      animalEmoji: '🦋',
      highlights: ['Tiendas de cerámica artesanal', 'Monasterio La Candelaria', 'Calles de colores vibrantes', 'Gastronomía típica'],
      distance: '170 km desde Bogotá',
      climate: 'Templado seco – 17°C promedio',
      imageKeyword: 'raquira,colombia,colorful',
      color: '#9B5DE5',
    },
    {
      id: 8,
      name: 'Sáchica',
      description:
        'Un pueblo tranquilo y encantador, conocido por sus viñedos únicos en Colombia. El lugar donde el zorro caminante y las mariposas azules te acompañan entre vides y senderos de tierra colorada rumbo a Villa de Leyva.',
      emoji: '🍇',
      animal: 'Zorro Caminero',
      animalEmoji: '🦊',
      highlights: ['Viñedos y bodegas de vino', 'Cristo Rey', 'Ruinas Muiscas', 'Parroquia San Pedro Apóstol'],
      distance: '152 km desde Bogotá',
      climate: 'Cálido semi-seco – 19°C promedio',
      imageKeyword: 'sachica,vineyard,colombia',
      color: '#D4A017',
    },
    {
      id: 9,
      name: 'Paipa',
      description:
        'Paipa es un destino de descanso entre montañas, famoso por sus aguas termales y la historia que guarda en el Pantano de Vargas. Un lugar ideal para recargar energía, caminar junto al lago y disfrutar la calma boyacense.',
      emoji: '♨️',
      animal: 'Pato Andino',
      animalEmoji: '🦆',
      highlights: ['Termales de Paipa', 'Lago Sochagota', 'Pantano de Vargas', 'Parque Jaime Rook'],
      distance: '182 km desde Bogotá',
      climate: 'Templado frío – 14°C promedio',
      imageKeyword: 'paipa,boyaca,termales',
      color: '#3A86FF',
    },
  ];

  findAll(): Town[] {
    return this.towns;
  }

  findOne(id: number): Town | undefined {
    return this.towns.find((t) => t.id === id);
  }
}
