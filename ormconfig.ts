import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { Basket } from 'src/entities/Basket.entity';
import { Flight } from 'src/entities/Flight.entity';
import { Ticket } from 'src/entities/Ticket.entity';
import { Train } from 'src/entities/Train.entity';

export const config: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: '/server/database.sqlite', // Путь к файлу базы данных SQLite3
  entities: [Basket, Train, Flight, Ticket],

  synchronize: true, // Автоматическое создание таблиц (не рекомендуется для production)
  logging: true, // Включение логгирования запросов (полезно для отладки)
};

// [__dirname + '/src/entities/**/*.entity.ts']
