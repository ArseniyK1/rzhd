import { Injectable, NotFoundException } from '@nestjs/common';
import {
  getAllDataEntitys,
  getOneColumnEntitys,
  validateId,
} from 'src/connect-db';

@Injectable()
export class FlightService {
  async findAll() {
    const data = await getAllDataEntitys('flight');
    return data;
  }

  async findOne(id: number) {
    const isValidId = await validateId('flight', id);

    if (isValidId) {
      const data = await getOneColumnEntitys('flight', 'flight_id', id);
      return data;
    } else {
      throw new NotFoundException('Select flight_id not found');
    }
  }
}
