// Block 조회
const { Web3 } = require("web3");
const rpcURL = "https://polygon-mumbai.infura.io/v3/caf248378ae646459409a0b29d9dc287";

const web3 = new Web3(rpcURL);

const blockNum = "42053528"
web3.eth.getBlock(blockNum).then((obj) => {
        console.log(obj);
    });