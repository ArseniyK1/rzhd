import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Flight } from './Flight.entity';
import { Basket } from './Basket.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  ticket_id: number;

  @Column()
  ticket_cost: number;

  @Column()
  ticket_count: number;

  @ManyToOne(() => Flight, (flight) => flight.tickets)
  flight: Flight;

  @ManyToOne(() => Basket, (basket) => basket.tickets)
  basket: Basket;
}
