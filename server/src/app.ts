import express, { type Express, type Request, type Response } from 'express';
import authRouter from './routes/auth.route.ts';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api/auth', authRouter);

app.listen(3000);

export default app