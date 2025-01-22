import express from 'express';
import connect from './database/email.database.js';
import upload from './routes/upload_route.js';

connect()
const app = express();

app.use(express.json());
app.use('/upload',upload)

export default app;