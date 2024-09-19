import mongoose from "mongoose";

/**
 * Connects to MongoDB with the URI provided in .env
 */
export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected : ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // 1 means exit with failure, 0 means success
	}
};
