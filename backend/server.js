import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to your server.');
})


app.listen(PORT, () => (console.log(`Listening to port ${PORT}`)));