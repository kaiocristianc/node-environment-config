module.exports = {
  environment: 'production',
  port: 1341,

  database: {
    adapter: 'sails-postgresql',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'test',
    database: 'test123'
  }
};
