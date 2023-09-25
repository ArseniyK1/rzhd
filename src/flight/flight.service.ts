import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from '../entities/Flight.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
  ) {}

  async findAll(): Promise<Flight[]> {
    try {
      const data = await this.flightRepository.find();
      return data;
    } catch (error) {
      console.error(error);
      throw error; // Прокинуть ошибку дальше
    }
  }

  async findOne(id: number) {
    return '1 flight';
  }
}
//
//
