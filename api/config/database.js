require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'blockvilla-api-db',
    host: process.env.DB_HOSTNAME || '127.0.0.1',
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || 'mysql', // Remove MYSQL
    use_env_variable: process.env.DATABASE_URL || "mysql://doadmin:i9cekkslnvadaxlt@db-mysql-nyc3-14645-do-user-4494658-0.b.db.ondigitalocean.com:25060/defaultdb?ssl-mode=REQUIRED",
  },

  test: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'blockvilla-api-db',
    host: process.env.DB_HOSTNAME || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
    use_env_variable: process.env.DATABASE_URL || "mysql://doadmin:i9cekkslnvadaxlt@db-mysql-nyc3-14645-do-user-4494658-0.b.db.ondigitalocean.com:25060/defaultdb?ssl-mode=REQUIRED",
  },

  production: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'blockvilla-api-db',
    host: process.env.DB_HOSTNAME || '127.0.0.1',
    port: process.env.DB_PORT,
   dialect: process.env.DB_DIALECT || 'mysql'
  },
  use_env_variable: process.env.DATABASE_URL
}
