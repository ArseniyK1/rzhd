import { Controller, Get, Param } from '@nestjs/common';
import { FlightService } from './flight.service';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  findAll() {
    return this.flightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.flightService.findOne(id);
  }
}
