const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request } = require('express');
const stripe = require('stripe')('sk_test_51Hcv8hJAOrx8iRKwOH9X7Vs7Nr6vzwdlKKfg5EzvwAe2VPRmiBuCgv3swz6ZaTn6JhrkKbFsvyTpGbRzehQkGUn3008wL5fJNT');
// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send('Hello'));

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  console.log('payment req rcvd', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})
// Listen
exports.api = functions.https.onRequest(app);
