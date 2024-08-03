const axios = require('axios')
const Price = require("../model/priceModel");
const cryptoData = require("../utils/cryptoNames");

async function fetchData(id) {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  return response.data;
}

async function pollData(){
    try{
        //const responses = await Promise.all(cryptoData.map(crypto => axios.get(fetchData(crypto.id))));
        const responses = await Promise.all(cryptoData.map(crypto => fetchData(crypto.id)));
        //console.log(responses)
        const prices = responses.map(response => ({
            name: response.name,
            symbol: response.symbol.toUpperCase(),
            price: response.market_data.current_price.usd, 
            timestamp: new Date(),
        }));
        console.log(prices)

        await Price.insertMany(prices);
    }catch(err){
        console.log('Error fetching or storing data', err);
    }
}

module.exports=pollData