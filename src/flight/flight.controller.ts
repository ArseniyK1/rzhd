import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Flight } from '../entities/Flight.entity';
import { CreateFlightDto } from './dto/create-flight.dto';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  create(@Body() createFlightDto: CreateFlightDto) {
    return this.flightService.create(createFlightDto);
  }

  @Get()
  findAll(): Promise<Flight[]> {
    return this.flightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.flightService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.flightService.remove(id);
    return { message: 'Train deleted successfully' };
  }
}
