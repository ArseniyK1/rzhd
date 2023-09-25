import { IsString } from 'class-validator';

export class CreateTrainDto {
  @IsString()
  train_name: string;

  @IsString()
  train_wagon_types: string;
}
