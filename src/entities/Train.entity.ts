import {
  Entity,
  OneToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Flight } from './Flight.entity';

@Entity()
export class Train {
  @PrimaryGeneratedColumn()
  train_id: number;

  @Column()
  train_name: string;

  @Column()
  train_wagon_types: string;

  @CreateDateColumn()
  createdAt: String;

  @UpdateDateColumn()
  updatedAt: String;

  @OneToMany(() => Flight, (flight) => flight.train)
  flights: Flight[];
}
//
