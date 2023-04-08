const Accounts = require('web3-eth-accounts')
const provider = 'wss://mainnet.infura.io/ws/v3/50bb40921c10491daa3ca843604b5aae'
const accounts = new Accounts(provider)
let accFound = false;
let accsSearched = 0;

const desiredChars = "000000"

while (!accFound) {
    const wallet = accounts.create()
    const address = wallet.address
    const key = wallet.privateKey

    const firsTwoChars = address.slice(2, desiredChars.length + 2);

    if (firsTwoChars == desiredChars) {
        accFound = true;
        console.log("Key Found : " + key);
    }

    if (accsSearched % 5000 == 0) {
        console.log(`Generated ${accsSearched} keys`);
    }
    accsSearched += 1;
}


