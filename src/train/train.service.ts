import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Train } from 'src/entities/Train.entity';
import { Repository } from 'typeorm';
import { CreateTrainDto } from './dto/create-train.dto';

@Injectable()
export class TrainService {
  constructor(
    @InjectRepository(Train)
    private readonly trainRepository: Repository<Train>,
  ) {}
  async findAll(): Promise<Train[]> {
    try {
      const data = await this.trainRepository.find();
      return data;
    } catch (error) {
      console.error(error);
      throw error; // Прокинуть ошибку дальше
    }
  }

  async findOne(id: number) {
    return 'get 1 train';
  }

  async create(dto: CreateTrainDto): Promise<Train> {
    const { train_name, train_wagon_types } = dto;
    console.log(train_name, train_wagon_types);

    // Создайте новый объект Train с помощью данных из DTO
    const newTrain = this.trainRepository.create({
      train_name,
      train_wagon_types,
    });

    // Сохраните новый объект Train в базе данных
    const savedTrain = await this.trainRepository.save(newTrain);

    return savedTrain;
  }
}
