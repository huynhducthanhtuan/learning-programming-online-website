const User = require("../models/User");
const braintree  = require('braintree');
const { response } = require("express");
require('dotenv').config()
    
const gateway =  new braintree.BraintreeGateway({
    environment : braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey : process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY
})

exports.generateToken = (req, res) => {
    gateway.clientToken.generate({}, function(err, response){
        if(err){
            res.status(500).send(err);
        }
        else{
            res.send({data: response});
        }
    })
}

exports.processPayment = (req, res) =>{
    let nonceFromTheClient = req.body.paymentMethodNonce
    let amountFromTheCLient = req.body.amount

    let newTransaction = gateway.transaction.sale({
        amount: amountFromTheCLient,
        paymentMethodNonce: nonceFromTheClient,
        options:{
            submitForSettlement: true
        }
        
    }).then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err))
}