const Cryptr = require('cryptr');
const cryptr = new Cryptr('ishop_token_$#@!');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const { v1 } = require('uuid');
var jwt = require('jsonwebtoken');
const secretKey = "wscubetech@jaipur123@@@";
// const userTokens = new Map();

function verifySignature(order_id, razorpay_payment_id, razorpay_signature) {
    const secret = "RDU8kyTwp391mehT3oXerX6X";
    const generated_signature = crypto.createHmac('sha256', secret)
        .update(`${order_id}|${razorpay_payment_id}`)
        .digest('hex');

    return generated_signature === razorpay_signature;
}

const razorpayInstance = new Razorpay({
    key_id: 'rzp_test_nx9HsGibPhqwmW',
    key_secret: 'RDU8kyTwp391mehT3oXerX6X',
});

function getRandomName(file_name) {
    return new Date().getTime() + Math.floor(Math.random() * 1000) + file_name;
}

function encryptPassowrd(password) {
    return cryptr.encrypt(password);
}
function decryptPassowrd(password) {
    return cryptr.decrypt(password);
}


function createToken(data) {
    const token = jwt.sign({ ...data }, secretKey, { expiresIn: 86400 });
    return token;
    // const token = v1();
    // if (userTokens.get(token) == undefined) {
    //     userTokens.set(token, data);
    //     return token;
    // } else {
    //     return createToken(data); // recursion
    // }
}


function verifyToken(token) {
    try {
        const admin = jwt.verify(token, secretKey);
        return admin;
    } catch (err) {
        return undefined;
    }
    // console.log(userTokens);
    // console.log(token);
    // if (userTokens.get(token) == undefined) return false
    // else return true;
}


module.exports = { getRandomName, verifySignature, encryptPassowrd, decryptPassowrd, razorpayInstance, createToken, verifyToken }; 