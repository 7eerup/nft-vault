// 거래 내역 조회
const { Web3 } = require("web3");
const rpcURL = "https://polygon-mumbai.infura.io/v3/caf248378ae646459409a0b29d9dc287";

const web3 = new Web3(rpcURL);

const txId = "0x70bd2fc49105465499175dcd6f0044654e7070a495b972b4e40ca918e7206034"
web3.eth.getTransaction(txId)
    .then((obj) => {
        console.log(obj);
    });