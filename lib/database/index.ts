import mongoose from "mongoose";

// Cached database connection
const cached = (global as any).mongoose || { conn: null, promise: null };

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDatabase = async () => {
	// If a connection already exists, return it
	if (cached.conn) return cached.conn;

	if (!MONGODB_URI) throw new Error("MONGODB_URI is missing!");

	console.log(MONGODB_URI);

	// If a promise to connect to the database already exists, reuse it;
	// otherwise, create a new promise and connect to the database
	cached.promise =
		cached.promise ||
		mongoose.connect(MONGODB_URI, {
			dbName: "evently",
			bufferCommands: false,
		});

	// Wait for the database connection to be established and assign it to the cached connection
	cached.conn = await cached.promise;

	console.log(cached);

	// Return the established database connection
	return cached.conn;
};
