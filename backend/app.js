import express from 'express';
import mongo_function from './database/email.database.js';

mongo_function()
const app = express();

app.use(express.json());

export default app;