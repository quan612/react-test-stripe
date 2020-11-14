const configureStripe = require("stripe");

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === "production"
    ? "sk_live_MY_SECRET_KEY"
    : "sk_test_Oxi69yR52agH5TPe1vDUyO0I00ywfc0aJR";

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
