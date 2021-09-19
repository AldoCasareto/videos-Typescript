import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import videoRoutes from './routes/videos.routes';

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(videoRoutes);
app.use(morgan('dev'));


export default app;
