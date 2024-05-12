import { pool } from "./db/index.js";

export async function getRooms() {
	// Query the database and return all rooms
	const rooms = await pool.query(`SELECT * FROM room`);
	return rooms.rows;
}
