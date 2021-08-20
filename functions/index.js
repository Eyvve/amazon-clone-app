const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JQAWkGP1shQmahcjDZxmmquNulezlOEwansEajkjz9XlVpHG1mSo5AbSxUqifUPxIsxHKu3bKRF4DTFbsBTfAqg00mYtuNVJD')


// API

// Config API
const app = express();

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('allo le monde'))

app.post('/payments/create', async (request, response) => {
    const total = request.query. total;

    console.log("Requête de paiement reçue", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "eur",    
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listener
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-ee23e/us-central1/api