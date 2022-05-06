const config = {
  archil: {
    host: 'localhost',
    user: 'achiko',
    password: 'A4wkgrsjEf74cDK',
    db: 'example_schema',
    dialect: 'mysql',
    logging: console.log
  },
  yidan: {
    host: 'http://<ip>',
    user: 'achiko',
    password: 'A4wkgrsjEf74cDK',
    db: 'mydb',
    dialect: 'mysql',
    logging: console.log
  },
  production: {
    host: 'http://<ip>',
    user: 'achiko',
    password: 'A4wkgrsjEf74cDK',
    db: 'mydb',
    dialect: 'mysql',
    logging: console.log
  }
};

module.exports = config;