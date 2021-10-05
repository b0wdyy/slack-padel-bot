const { Router } = require('express');
const axios = require('axios');
const moment = require('moment');
const { initCrawler, getDateFromDay, getLink } = require('../utils');

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

  await axios.post(response_url, {
    text: 'Even kijken hoeveel velden er nog vrij zijn...',
  });

  const link = getLink({ date });
  const fields = await initCrawler({ link });
  const actualFields = fields.length / 3;

  if (actualFields > 0) {
    return res.send(`Er zijn nog ${actualFields} beschikbaar <@${user_id}>!! Boek nu: ${link} 🎾🎾`);
  }

  return res.send(`Slecht nieuws makker, geen velden meer vrij op ${text}... 😭😭`);
});

module.exports = router;
