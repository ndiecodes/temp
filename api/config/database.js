require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'Changeless11!',
    database: process.env.DB_NAME || 'blockvilla-api-db',
    host: process.env.DB_HOSTNAME || '127.0.0.1',
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || 'mysql', // Remove MYSQL
    use_env_variable: process.env.DATABASE_URL || null,
  },

  test: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'Changeless11!',
    database: process.env.DB_NAME || 'blockvilla-api-db',
    host: process.env.DB_HOSTNAME || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
    use_env_variable: process.env.DATABASE_URL || null,
  },

  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || 'mysql',
    use_env_variable: process.env.DATABASE_URL || null,
  },
  use_env_variable: process.env.DATABASE_URL || null,
}
