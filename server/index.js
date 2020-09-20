import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('I am a chosen one');
});

app.listen(port, () => console.log('I am a chosen one listening on port   ===>', port));