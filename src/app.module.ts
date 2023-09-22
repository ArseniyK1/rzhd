import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainModule } from './train/train.module';
import { FlightModule } from './flight/flight.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [TrainModule, FlightModule, TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
