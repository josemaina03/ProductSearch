// server.ts

import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './Routes/productRoutes';

dotenv.config(); // Load environment variables

const app = express();

app.use(express.json());

// Routes
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
