import express from 'express';
import http from 'http';
import logger from 'morgan';
import apiRouter from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', apiRouter);

const port = '8000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

export default server;
