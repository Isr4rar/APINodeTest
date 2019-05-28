module.exports = {
  test: {
    client: 'pg',
    version: '9.6',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'barriga',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
