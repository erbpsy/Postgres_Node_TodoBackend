const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    user: "postgres",
    password: "admin",
    host: "localhost",
    port: 5432,
    database: "oozoutodo"
});
module.exports = pool;