const mongoose = require("mongoose")
const logger = require("../utils/logger")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mern-testing", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    logger.info(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    logger.error("Database connection failed", { error: error.message })
    process.exit(1)
  }
}

module.exports = connectDB
