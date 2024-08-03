const express=require('express')
const connectDB = require('./config/db')
const colors=require('colors')
const cron = require('node-cron');
const pollData = require('./services/pollData');
const Price = require('./model/priceModel');
const dotenv=require('dotenv')

//dotenv.config()

const app=express()
connectDB()
const port=8080

//const MONGO_PASSWORD= "S0O5jfUG50bbN2MX"
//console.log(typeof pollData)

cron.schedule('*/5 * * * * *', pollData)

app.get('/api/prices/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const prices = await Price.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port,(err)=>{
    if(err){
        console.log(`Error connecting to the server due to ${err}`)
    }
    console.log(`Connection established at: ${port}`.yellow.bold)
})