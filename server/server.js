import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import {v4 as uuid} from 'uuid'

import Connection from './database/db.js';
import DefaultData from './DefaultData.js';
import Router from './routes/route.js';
const PORT= process.env.PORT || 8000;
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.cvwkho7.mongodb.net/ECOMMERCE?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();



app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/av1',Router);



Connection(URL);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}



DefaultData();
app.listen(PORT,()=>{
    console.log(`Server is running successfully on PORT ${PORT}`);
});

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams ={};

paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['PAYTM_INDUSTRI_TYPE_ID'] = process.env.PAYTM_INDUSTRI_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALBACK_URL'] = 'callback';
paytmParams['EMAIL'] = 'codeforinterview01@gmail.com';
paytmParams['MOBILE_NO'] = '1234567891';