import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Train } from 'src/entities/Train.entity';
import { JoinColumn, ManyToOne } from 'typeorm';

export class CreateFlightDto {
  @Type(() => Date)
  @IsDate()
  time_departure: Date;

  @Type(() => Date)
  @IsDate()
  time_arrival: Date;

  @IsString()
  city_departure: string;

  @IsString()
  city_arrival: string;

  @IsNumber()
  travel_time: number;

  @IsNumber()
  trainId: number; // Внешний ключ на поезд

  @ManyToOne(() => Train, (train) => train.flights) // Добавляем это
  @JoinColumn({ name: 'train_id' }) // Указываем имя колонки в БД
  train: Train;
}
//
