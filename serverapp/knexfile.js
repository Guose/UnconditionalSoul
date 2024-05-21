// knexfile.js

module.exports = {
  development: {
    client: 'pg', // Change this to your database client (e.g., 'pg')
    connection: {
      host: 'localhost',
      user: 'sa',
      password: '5p3ctrum!',
      database: 'WebAppExample1DB',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  // Other environments (e.g., 'production') can be defined here as well.
};
