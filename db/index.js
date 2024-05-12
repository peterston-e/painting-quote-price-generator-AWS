import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.DB_CONNECTION_STRING;
if (!connectionString) {
	throw new Error(
		"No DB_CONNECTION_STRING defined. Did you load in your env variables?"
	);
}

// Export a new instance of pg.Pool, which will be used to interact with the PostgreSQL database
export const pool = new pg.Pool({
	// Pass the connection string to the pool, so it knows how to connect to your database
	connectionString,
	ssl: {
		rejectUnauthorized: false, // Important for some cloud databases, use with caution
	},
});
