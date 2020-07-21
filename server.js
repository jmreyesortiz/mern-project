// Express
const express = require('express');
const app = express();
// Mongo
const connectDB = require('./config/db');
connectDB();
// Server
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => res.send('Api Running'));
app.listen(PORT, () => console.log(`Server started on ${PORT}`));

//Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
