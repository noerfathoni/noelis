'use strict'

import { createConnection } from "typeorm";

async function myConnection () {
  return createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'noelis',
    entities: [
      __dirname + '/../**/**/**.entity{.ts,.js}'
    ],
    synchronize: true,
  })
}

export default myConnection