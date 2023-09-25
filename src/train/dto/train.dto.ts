import { IsString } from 'class-validator';

export class TrainDto {
  @IsString()
  train_wagon_types: string;

  @IsString()
  train_name: string;
}
