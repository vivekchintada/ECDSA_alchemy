const secp = require("ethereum-cryptography/secp256k1");

const { toHex }= require("ethereum-cryptography/utils");

const privateKey=secp.utils.randomPrivateKey();

console.log("Private key:", toHex(privateKey));

const publicKey=secrp.getPublicKey(privateKey);

console.log("Public Key:",toHex(publicKey));