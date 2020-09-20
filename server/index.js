import express from 'express';
import dotenv from 'dotenv';
import Sequelize from 'sequelize';


dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, 
    { host: process.env.DB_HOST, dialect: 'postgres' },
);

const initDatabase = async () => {
    try{
        await sequelize.authenticate();
        console.log('I am a chosen one connected to postgress');
    }catch(e) {
        console.log('I am a chosen one Not connected to postgress yet =====> ', e)
    };
};


const app = express();
const port = 3000;

app.get('/', (req, res) => {
    initDatabase();
    res.send('I am a chosen one');
});

app.listen(port, () => console.log('I am a chosen one listening on port   ===>', port));