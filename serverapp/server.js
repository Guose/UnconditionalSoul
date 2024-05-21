const express = require('express')
const cors = require('cors')
const app = express()// Import userRoutes module

// Middleware and other app configuration...
app.use(cors())
app.use(express.json())
// Use user routes
app.use('/api', userRoutes);

// Start the server...
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
