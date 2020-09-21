import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';

const app = express();
const port = parseInt(process.env.PORT) || 3000;

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('WELCOME TO BREW\'S COLLEGE API');
});

app.use('/api/v1/users', userRoute);

app.listen(port, () => console.log('I am a chosen one listening on port   ===>', port));