import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from '../entities/Flight.entity';
import { Train } from 'src/entities/Train.entity';
import { TrainService } from 'src/train/train.service';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Flight, Train])],
  controllers: [FlightController],
  providers: [FlightService, TrainService, Repository<Train>],
})
export class FlightModule {}
