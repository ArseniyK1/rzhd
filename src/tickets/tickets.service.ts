import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TicketsService {
  async findAll() {
    return 'get tickets';
  }

  async findOne(id: number) {
    return 'get 1 tickets';
  }

  async increment(id: number) {
    return 'inc';
  }

  async decrement(id: number) {
    return 'dec';
  }
}
