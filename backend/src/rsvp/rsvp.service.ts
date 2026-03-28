import { Injectable } from '@nestjs/common';
import { CreateRsvpDto } from './rsvp.dto';

@Injectable()
export class RsvpService {
  private responses: (CreateRsvpDto & { id: number; createdAt: Date })[] = [];
  private counter = 1;

  create(dto: CreateRsvpDto) {
    const entry = { ...dto, id: this.counter++, createdAt: new Date() };
    this.responses.push(entry);
    return {
      success: true,
      message: `¡Gracias ${dto.name}! Tu respuesta ha sido guardada. 🦋`,
      data: entry,
    };
  }

  findAll() {
    return this.responses;
  }
}
