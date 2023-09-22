import { IsNumber } from 'class-validator';

export class TicketsDTO {
  @IsNumber()
  tickets_cost: number;

  @IsNumber()
  tickets_count: number;
}
