import { Injectable, NotFoundException } from '@nestjs/common';
import {
  getAllDataEntitys,
  getOneColumnEntitys,
  updateColumnById,
  validateId,
} from 'src/connect-db';

@Injectable()
export class TicketsService {
  async findAll() {
    const data = await getAllDataEntitys('tickets');
    return data;
  }

  async findOne(id: number) {
    const isValidId = await validateId('tickets', id);

    if (isValidId) {
      const data = await getOneColumnEntitys('tickets', 'tickets_id', id);
      return data.map((obj) => obj.tickets_id);
    } else {
      throw new NotFoundException('Select tickets_id not found');
    }
  }

  async increment(id: number) {
    const isValidId = await validateId('tickets', id);

    if (isValidId) {
      const data = await updateColumnById('tickets', 'tickets_count', id, '+');

      return data;
    } else {
      throw new NotFoundException('Select tickets_id not found');
    }
  }

  async decrement(id: number) {
    const isValidId = await validateId('tickets', id);

    if (isValidId) {
      const data = await updateColumnById('tickets', 'tickets_count', id, '-');
      return data;
    } else {
      throw new NotFoundException('Select tickets_id not found');
    }
  }
}
