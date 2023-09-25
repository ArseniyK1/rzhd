import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ticket } from './Ticket.entity';

@Entity()
export class Basket {
  @PrimaryGeneratedColumn()
  basket_id: number;

  @Column()
  basket_total_count: number;

  @Column()
  basket_total_cost: number;

  @OneToMany(() => Ticket, (ticket) => ticket.basket)
  tickets: Ticket[];
}
