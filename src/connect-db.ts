import { Database } from 'sqlite3';
import path from 'path';
const dbPath = path.resolve(__dirname, '..', 'db.db');

const db = new Database(dbPath);

export const getAllDataEntitys = (entity: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const db = new Database(dbPath);

    db.all(`SELECT * FROM ${entity}`, (_: Error, res: any) => {
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
): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const db = new Database(dbPath);

    db.all(
      `SELECT * FROM ${entity} WHERE ${column}=${id}`,
      (_: Error, res: any) => {
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

export const updateColumnById = (
  entity: string,
  column: string,
  id: number,
  expression_sign: string,
): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const db = new Database(dbPath);
    db.run(
      `UPDATE ${entity} SET ${column} = ${column} ${expression_sign} 1 WHERE ${entity}_id = ${id}`,
      (_: Error) => {
        if (_ === null) {
          db.all(
            `SELECT * FROM ${entity} WHERE ${entity}_id = ${id}`,
            (err: Error, res: any[]) => {
              db.close();
              if (err) {
                reject(err);
              } else {
                resolve(res);
              }
            },
          );
        } else {
          db.close();
          reject(_);
        }
      },
    );
  });
};

export const validateId = (entity: string, id: number): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const db = new Database(dbPath);
    db.get(
      `SELECT ${entity}_id FROM ${entity} WHERE ${entity}_id = ${id}`,
      (_: Error, row: any) => {
        db.close((err) => {
          if (err) {
            reject(err);
          } else {
            resolve(!!row);
          }
        });
      },
    );
  });
};

db.close();
