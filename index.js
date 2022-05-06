const server = require('./server');

const port = process.env.PORT || 80; // Using 80 as default port

const handleExit = signal => {
  console.log(`\nReceived ${signal}. Properly closing my server.`);
  process.exit(0);
}

const start = (port) => {
  try {
    server.listen(port, () => {
      console.log(`Service is running on port ${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

start(port);