import { Injectable, NotFoundException } from '@nestjs/common';
import {
  getAllDataEntitys,
  getOneColumnEntitys,
  validateId,
} from 'src/connect-db';

@Injectable()
export class TrainService {
  async findAll() {
    const data = await getAllDataEntitys('train');
    return data;
  }

  async findOne(id: number) {
    const isValidId = await validateId('train', id);

    if (isValidId) {
      const data = await getOneColumnEntitys('train', 'train_id', id);
      return data;
    } else {
      throw new NotFoundException('Select train_id not found');
    }
  }
}
