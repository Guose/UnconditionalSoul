const { Pool } = require('pg');

// Database connection parameters
const dbConfig = {
  user: 'sa',
  host: 'localhost',
  database: 'WebAppExample1DB',
  password: '5p3ctrum!',
  port: 5432,
};

// Create Postgres connection pool
const pool = new Pool(dbConfig);

// Function to check if a database exists
async function doesDatabaseExists(databaseName) {
  const client = await pool.connect();
  try {
    // Query to check if the database exists
    const queryResult = await client.query(
      'SELECT 1 FROM pg_database WHERE datname = $1',
      [databaseName]
    );

    return queryResult.rows.length > 0;
  } finally {
    client.release();
  }
}

// Define the name of the database you want to use
const databaseName = 'WebAppExample1DB';

doesDatabaseExists(databaseName)
  .then((exists) => {
    if (exists) {
      console.log('Database exists. You can proceed with Knex migrations.');
    } else {
      console.error(`Database '${databaseName}' does not exist.`);
    }
  })
  .catch((error) => {
    console.error('Error checking database existence: ', error);
  });
