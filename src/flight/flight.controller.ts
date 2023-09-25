import { Controller, Get, Param } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Flight } from '../entities/Flight.entity';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  findAll(): Promise<Flight[]> {
    return this.flightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightService.findOne(+id);
  }
}
