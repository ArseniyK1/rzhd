import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Train } from './Train.entity';
import { Ticket } from './Ticket.entity';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn()
  flight_id: number;

  @Column()
  time_departure: Date;

  @Column()
  time_arrival: Date;

  @Column()
  city_departure: string;

  @Column()
  city_arrival: string;

  @Column()
  travel_time: number;

  @ManyToOne(() => Train, (train) => train.flights)
  train: Train;

  @OneToMany(() => Ticket, (ticket) => ticket.flight)
  tickets: Ticket[];
}
