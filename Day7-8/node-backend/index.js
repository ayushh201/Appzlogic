import express from 'express';
import cors from 'cors';
import aiRoutes from './routes/aiRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', aiRoutes);

const PORT = 5002;
app.listen(PORT, () => console.log(`Node server running on port ${PORT}`));
