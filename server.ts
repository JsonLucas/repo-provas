import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { port } from './utils/environment';

const app = express();
app.use(json());
app.use(cors());

app.listen(port, () => { console.log(`server running at port ${port}`); });