import { IsString } from 'class-validator';

export class FlightDTO {
  @IsString()
  time_departure: string;

  @IsString()
  time_arrival: string;

  @IsString()
  city_departure: string;

  @IsString()
  city_arrival: string;

  @IsString()
  travel_time: string;
}
// time_departure, time_arrival, city_departure, city_arrival, travel_time
