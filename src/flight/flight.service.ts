import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from '../entities/Flight.entity';
import { Repository } from 'typeorm';
import { CreateFlightDto } from './dto/create-flight.dto';
import { Train } from '../entities/Train.entity';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
    private readonly trainRepository: Repository<Train>,
  ) {}

  async create(createFlightDto: CreateFlightDto) /* : Promise<Flight> */ {
    const { trainId, ...flightData } = createFlightDto;
    // Проверяем, существует ли поезд с указанным trainId
    const train = await this.trainRepository.findOne({
      where: { train_id: trainId },
    });

    if (!train) {
      throw new NotFoundException(`Train with ID ${trainId} not found`);
    }
    const flight = this.flightRepository.create({
      ...flightData,
      train: train, // Создаем связь с поездом по ID
    });
    return this.flightRepository.save(flight);
  }

  async findAll(): Promise<Flight[]> {
    try {
      const data = await this.flightRepository.find();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  //
  async findOne(id: number): Promise<Flight | undefined> {
    try {
      const flight = await this.flightRepository.findOne({
        where: {
          flight_id: id,
        },
      });
      if (!flight) {
        throw new NotFoundException(`Flight with ID ${id} not found`);
      }
      return flight;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // async update(id: number, dto: UpdateTrainDto) {
  //   try {
  //     const train = await this.findOne(id);
  //     if (!train) {
  //       throw new NotFoundException(`Train with ID ${id} not found`);
  //     }
  //     const updatedTrain = { ...train, ...dto };
  //     await this.trainRepository.save(updatedTrain);
  //     return updatedTrain;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }

  async remove(id: number) {
    try {
      const flight = await this.findOne(id);
      if (!flight) {
        throw new NotFoundException(`Flight with ID ${id} not found`);
      }
      await this.flightRepository.remove(flight);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
