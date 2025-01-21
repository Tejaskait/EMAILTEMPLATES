import app from "./app.js";
import dotenv from 'dotenv'

import http from "http";
import { Server } from "socket.io";

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

server.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});