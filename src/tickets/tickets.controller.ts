import { Controller, Get, Param, Put } from '@nestjs/common';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ticketsService.findOne(id);
  }

  @Put('increment/:id')
  increment(@Param('id') id: number) {
    return this.ticketsService.increment(id);
  }

  @Put('decrement/:id')
  decrement(@Param('id') id: number) {
    return this.ticketsService.decrement(id);
  }
}
