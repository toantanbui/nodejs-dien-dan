import express from 'express';
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const { Server } = require("socket.io");
import webRoutes from './route/webRoutes';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = app.listen(port, () => {
    console.log(`Moi ban truy cap vao: http://localhost:${port}`)
})
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

webRoutes(app);











