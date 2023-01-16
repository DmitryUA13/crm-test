import mysql from 'mysql2/promise';

export default async function Db(sqlQuery) {
    // create the connection
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'fd_crm'});
    // query database
    const [rows, fields] = await connection.execute(sqlQuery);
    return rows;
  }

