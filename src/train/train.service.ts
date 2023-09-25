import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Train } from 'src/entities/Train.entity';
import { Repository } from 'typeorm';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';

@Injectable()
export class TrainService {
  constructor(
    @InjectRepository(Train)
    private readonly trainRepository: Repository<Train>,
  ) {}

  async create(dto: CreateTrainDto): Promise<Train> {
    const { train_name, train_wagon_types } = dto;
    console.log(train_name, train_wagon_types);

    const newTrain = this.trainRepository.create({
      train_name,
      train_wagon_types,
    });

    const savedTrain = await this.trainRepository.save(newTrain);

    return savedTrain;
  }

  async findAll(): Promise<Train[]> {
    try {
      const data = await this.trainRepository.find();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findOne(id: number): Promise<Train | undefined> {
    try {
      const train = await this.trainRepository.findOne({
        where: {
          train_id: id,
        },
      });
      if (!train) {
        throw new NotFoundException(`Train with ID ${id} not found`);
      }
      return train;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update(id: number, dto: UpdateTrainDto) {
    try {
      const train = await this.findOne(id);
      if (!train) {
        throw new NotFoundException(`Train with ID ${id} not found`);
      }
      const updatedTrain = { ...train, ...dto };
      await this.trainRepository.save(updatedTrain);
      return updatedTrain;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const train = await this.findOne(id);
      if (!train) {
        throw new NotFoundException(`Train with ID ${id} not found`);
      }
      await this.trainRepository.remove(train);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
