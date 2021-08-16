import express, { Request, Response } from 'express';
import axios from 'axios';


require('dotenv').config();
const moment = require('moment');

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const headers = {
  'x-rapidapi-key': process.env.X_RAPID_API_KEY,
  'x-rapidapi-host': process.env.X_RAPID_API_HOST
};

app.use(express.json());
app.use(cors());

//get list place
app.get('/list-place', async (req: Request, res: Response) => {
  try {
    const listPlaceData = await axios.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/VN/VND/en-EN/?query=${req.query.place}`, { headers });
    res.json(listPlaceData.data);
  } catch (e) {
    console.log(e);
  }
});

//
app.get('/browse-routes', async (req: Request, res: Response) => {
  const currency = 'USD';
  const originPlace = req.body.originPlace;
  const outboundPartialDate = req.body.outbound;
  const country = 'VN';
  const destinationPlace = req.body.destinationPlace;
  const locale = 'en-US';

  try {
    const routes = await axios.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/${country}/${currency}/${locale}/${originPlace}/${destinationPlace}/${outboundPartialDate}`, { headers });
    res.json(routes.data);
  } catch (e) {
    console.log(e);
  }
})


app.listen(PORT, () => console.log(`🚀 connected to port ${PORT}`));
