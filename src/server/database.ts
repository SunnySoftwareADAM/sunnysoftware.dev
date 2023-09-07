import type { QueryResult } from 'pg';
import { Client } from 'pg';
import config from './config';
import logger from './logger';

export const client = new Client({
  host: config.pg.host,
  port: config.pg.port,
  database: config.pg.database,
  user: config.pg.user,
  password: config.pg.password,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const initializeDatabase = async(): Promise<void> => {
  await client.connect();
  logger.info('Database initialized successfully.');
};

type User = {
  username: string;
  email: string;
  password: string;
  role: string;
  salt: string;
};
export type { User };

type UserWithId = {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  salt: string;
};
export type { UserWithId };

export const getUserByUsername = async(usernameInput: string):
Promise<UserWithId> => {
  const result: QueryResult<UserWithId> = await client.query(
    'SELECT id, username, email, password, role, salt FROM "Users" WHERE username=$1',
    [usernameInput],
  );

  const { rows } = result;
  if (rows.length !== 1) {
    throw new Error('Unable to select the user.');
  }
  const user: UserWithId = rows[0];
  const { id, username, email, password, role, salt } = user;

  return {
    id,
    username,
    email,
    password,
    role,
    salt,
  };
};

export const insertUser = async(
  username: string, email: string,
  password: string, role: string,
  salt: string
): Promise<User> => {
  await client.query(`INSERT INTO "Users" (username, email, password, role, salt)
           VALUES ($1, $2, $3, $4, $5)`, [username, email, password, role, salt]);
  return {
    username,
    email,
    password,
    role,
    salt,
  };
};

export const insertToken = async(
  foreignKey: number,
  token: string, expirationDate: Date
): Promise<string> => {
  await client.query(`INSERT INTO "AuthenticationTokens"
   (user_id, token, expiration)
  VALUES ($1, $2, $3)`, [foreignKey, token, expirationDate]);
  return token;
};

// delete token, get from local machine, compare and delete
// WIP

export const deleteToken = async(localToken: string): Promise<boolean> => {
  await client.query(`DELETE FROM "AuthenticationTokens"
   WHERE token=$1`, [localToken]);
  return true;
};
// userExists types and function

// type userIDExists = {
//   id: number;
//   exists: boolean;
// };
// export type { userIDExists };

// type idObject = {
//   id: number;
// };

// export const userExists = async(username: string, password: string):
// Promise<userIDExists> => {
//   const result = await client.query(
//     'SELECT id FROM "Users" WHERE username=$1 AND password=$2',
//     [username, password],
//   );

//   const { rows } = result;
//   if (typeof rows[0] !== 'object') {
//     throw new Error('userExists:  idObject not returned');
//   }
//   const returnObject: idObject = rows[0]; // unsafe assignment of 'any' value
//   const { id } = returnObject;
//   if (typeof (id) !== 'number') {
//     throw new Error('userExists: id not returned as number');
//   }
//   const exists = rows.length > 0;
//   return {
//     id,
//     exists,
//   };
// };
