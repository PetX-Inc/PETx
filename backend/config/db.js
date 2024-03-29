const mongoose = require('mongoose');


const connectDB = async () => {
    try {
      const connectionParams = {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      };
    const conn = await mongoose.connect(process.env.MONGO_URI, connectionParams)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB