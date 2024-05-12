import { pool } from "./db/index.js";

export async function getRooms() {
	// Query the database and return all rooms
	const rooms = await pool.query(`
    SELECT * FROM room
    LEFT JOIN walls
      ON room.room_id = walls.room_id`);
	return rooms.rows;
}
