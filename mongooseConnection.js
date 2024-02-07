const mongoose = require('mongoose');
const config = require('./config');
mongoose.set('strictQuery', false);

function SetupMongooseConnections() {
  const initializeConn = () => {
    mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
      });
  };

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose disconnected on process termination');
      process.exit(0);
    });
  });

  return {
    initializeConn,
  };
}

const setupConn = new SetupMongooseConnections();
module.exports = setupConn;
