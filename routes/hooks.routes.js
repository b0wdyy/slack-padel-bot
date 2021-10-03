const { Router } = require('express');
const axios = require('axios');
const moment = require('moment');
const getDateFromDay = require('../utils/index');

const router = Router();
const days = [
  'maandag',
  'dinsdag',
  'woensdag',
  'donderdag',
  'vrijdag',
  'zaterdag',
  'zondag',
];

router.post('/padel', async (req, res) => {
  const { response_url, text, user_id } = req.body;

  if (!days.includes(text.toLowerCase())) {
    return res.send('Geen geldige dag gegeven, makker...');
  }

  const day = getDateFromDay(text);
  const date = moment().day(day).format('DD-MM-YYYY');

  console.log(date);

  await axios.post(response_url, {
    text: `ja man broer, <@${user_id}>`,
  });
  res.send('Even kijken hoeveel velden er beschikbaar zijn....');
  return res.send('Normaal heb ik gereageerd');
});

module.exports = router;
