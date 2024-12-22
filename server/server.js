import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import toDoRoutes from './routes/toDoRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api/todo', toDoRoutes);

// Database Connection
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('DB Connected Successfully!');
	})
	.catch((err) => {
		console.error('Database connection failed:', err);
	});

// Server Start
app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
});
