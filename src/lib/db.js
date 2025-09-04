import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  port: 3308, // change to 3306 if using default MySQL port
  user: 'root', // change if you use a different user
  password: 'KKrr@123', // replace with your MySQL password
  database: 'school_db',
});
