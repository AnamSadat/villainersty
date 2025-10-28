// src/server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes/homeRoute';
import { logger } from './middleware/logger';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.use('/', router);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route tidak ditemukan' });
});

app.listen(port, () => {
  console.log(`✅ Server berjalan di http://localhost:${port}`);
});
