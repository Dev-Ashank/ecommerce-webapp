const functions = require("firebase-functions");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors")({ origin: true });
const stripe = require("stripe")(
  "sk_test_51MPYSySCfurchPbxCxEVlDTcYsPW7ucE5yb4ByKFmpIzTErp8D5kE60bNRXgjtoViNQSqelfGm66OlNhprlEFM4r008nUnEbrP"
);
//api

//app config
const app = express();
//middlewares
app.use(bodyParser.json());
app.use(cors);
app.use(express.json());
//API routes
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});


app.post("/payments/create", async (request, response) => {
  const total = request.body.total;

   console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'inr'
  });

  // OK - Created
  response.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);
