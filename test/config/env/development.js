module.exports = {
  environment: 'development',
  port:  1337,

  database: {
    adapter: 'sails-postgresql',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'test',
    database: 'test123'
  }
};
