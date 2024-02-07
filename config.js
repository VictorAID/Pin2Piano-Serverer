const config = {
    PORT: process.env.PORT || 3001, // Change to a different port, e.g., 3001
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017',
  };
  
  module.exports = config;
  