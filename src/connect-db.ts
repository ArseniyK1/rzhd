import { Database } from 'sqlite3';
import path from 'path';
import { TrainDto } from './train/dto/train.dto';
const dbPath = path.resolve(__dirname, '..', 'db.db');

const db = new Database(dbPath);

export const getAllDataEntitys = (entity: string): Promise<TrainDto> => {
  return new Promise((resolve, reject) => {
    const db = new Database(dbPath);

    db.all(`SELECT * FROM ${entity}`, (_: Error, res: TrainDto) => {
      db.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  });
};

export const getOneColumnEntitys = (
  entity: string,
  column: string,
  id: number,
): Promise<TrainDto> => {
  return new Promise((resolve, reject) => {
    const db = new Database(dbPath);

    db.all(
      `SELECT * FROM ${entity} WHERE ${column}=${id}`,
      (_: Error, res: TrainDto) => {
        db.close((err) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      },
    );
  });
};

db.close();
