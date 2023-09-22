import { Injectable } from '@nestjs/common';
import { getAllDataEntitys, getOneColumnEntitys } from 'src/connect-db';

@Injectable()
export class TrainService {
  async findAll() {
    const data = await getAllDataEntitys('train');
    return data;
  }

  async findOne(id: number) {
    const data = await getOneColumnEntitys('train', 'train_id', id);
    return data;
  }

  remove(id: number) {
    return `This action removes a #${id} train`;
  }
}
