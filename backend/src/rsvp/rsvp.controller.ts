import { Body, Controller, Get, Post } from '@nestjs/common';
import { RsvpService } from './rsvp.service';
import { CreateRsvpDto } from './rsvp.dto';

@Controller('rsvp')
export class RsvpController {
  constructor(private readonly rsvpService: RsvpService) {}

  @Post()
  create(@Body() dto: CreateRsvpDto) {
    return this.rsvpService.create(dto);
  }

  @Get()
  findAll() {
    return this.rsvpService.findAll();
  }
}
