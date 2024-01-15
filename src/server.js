import express from 'express';
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
import cookieParser from 'cookie-parser'

import webRoutes from './route/webRoutes';
import bodyParser from 'body-parser';
import cors from 'cors';

app.listen(port, () => {
    console.log(`Moi ban truy cap vao: http://localhost:${port}`)
})

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //axios
    optionSuccessStatus: 200,
    methods: ["GET", "POST"]
}
app.use(cors(corsOptions));



app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cookieParser());





webRoutes(app);











