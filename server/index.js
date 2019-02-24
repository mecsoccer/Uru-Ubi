import express from 'express';
import http from 'http';
import apiRouter from './routes/index';

const app = express();

app.use('/api/v1/', apiRouter);

const port = '8000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

export default server;
