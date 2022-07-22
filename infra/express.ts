import express, { json } from 'express';
import 'express-async-errors'
import cors from 'cors';
import routes from '../routes';
import handleErrors from '../errors';

const app = express();
app.use(json());
app.use(cors());
app.use(routes);
app.use(handleErrors);

export default app;