import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TownsModule } from './towns/towns.module';
import { RsvpModule } from './rsvp/rsvp.module';

@Module({
  imports: [TownsModule, RsvpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
