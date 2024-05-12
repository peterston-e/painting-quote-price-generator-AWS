import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import { getRooms } from "./getdata.js";

// Initialize the express app
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Endpoint to retrieve all rooms
app.get("/room", async function (req, res) {
	const rooms = await getRooms();
	res.status(200).json({ status: "success", data: rooms });
});

// Start the server and listen on the specified port
app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}`);
});
