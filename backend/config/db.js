import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect( "mongodb+srv://test:865XF430g8MADDdk@cluster0.dl9mo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
