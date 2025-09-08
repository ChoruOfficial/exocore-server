const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Costaños!'));

// Non-root port 8080
app.listen(8080, '0.0.0.0', () => console.log('Server running on http://0.0.0.0:8080'));
