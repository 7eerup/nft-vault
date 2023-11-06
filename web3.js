const { Web3 } = require("web3");
const rpcURL = "https://polygon-mumbai.infura.io/v3/caf248378ae646459409a0b29d9dc287";  // Infura RPC URL

const web3 = new Web3(rpcURL);

const account = "0x290e6bbECB3AE7aB8F584E7847f3e374E8AA3282";  // MetaMask 계정

// Balance 조회
web3.eth.getBalance(account)
    .then((bal) => {
        console.log(account, bal);
        return web3.utils.fromWei(bal, "ether");
    })
    .then((eth) =>{
        console.log(eth)
    });