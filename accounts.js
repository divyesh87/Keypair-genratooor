const Accounts = require('web3-eth-accounts');
const provider = 'wss://mainnet.infura.io/ws/v3/50bb40921c10491daa3ca843604b5aae';
const accounts = new Accounts(provider);
let accFound = false;
let accsSearched = 0;

const prefix = "0000";
const postfix = "0000";

console.log("");

while (!accFound) {

    const wallet = accounts.create();
    const address = wallet.address;
    const key = wallet.privateKey;
    const addressLen = address.length;

    const genPrefix = address.slice(2, prefix.length + 2);
    const genPostfix = address.slice(addressLen - postfix.length, addressLen);

    if (genPostfix == postfix && genPrefix == prefix) {
        accFound = true;
        console.log("Generated address :" + address);
        console.log("PrivateKey Found :" + key);
    }

    if (accsSearched % 5000 == 0) {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write("Generated accounts ~ " + accsSearched);
    }

    accsSearched += 1;
}




