import { IsString } from 'class-validator';

export class TrainDto {
  @IsString()
  wagon_types: string;

  @IsString()
  train_name: string;
}
