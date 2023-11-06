require("dotenv").config();

const { Web3 } = require("web3");
// const rpcURL = "https://polygon-mumbai.infura.io/v3/caf248378ae646459409a0b29d9dc287"; // Mumbai
const rpcURL = "https://api.baobab.klaytn.net:8651"; // 클레이튼 바오밥 테스트넷
const web3 = new Web3(rpcURL);

const abi = require("./abi.json");
const ca = "0xef6723BaC0FFF075C1792e35b555AeD5D4f3BCED"; // Contract Address
const account = "0x5D674b20c73CCf59e7aFDc3fDC5427f59C821cea"; // My Address
const privateKey = process.env.PRIVATEKEY; // .env.example에 자신의 비밀키를 넣으세요. 파일명에서 '.example'을 꼭 지우고 사용하세요! (.env 만 사용)

const contract = new web3.eth.Contract(abi, ca);
const message = "Welcome To ICT"; // 메시지

const getHelloWorld = async () => {
  const result = await contract.methods.getGreeting().call();

  console.log(result);
};

const setHelloWorld = async () => {
  const setGreeting = await contract.methods.setGreeting(message).encodeABI();
  const estimate = await contract.methods.setGreeting(message).estimateGas({
    from: account,
  });

  const result = await web3.eth.accounts
    .signTransaction(
      {
        from: account,
        to: ca,
        gas: estimate,
        gasPrice: await web3.eth.getGasPrice(),
        data: setGreeting,
      },
      privateKey
    )
    .then(async (Tx) => {
      await web3.eth
        .sendSignedTransaction(Tx.rawTransaction)
        .then((hash, err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("성공!", hash);
            return hash;
          }
        });
    });
};

getHelloWorld();
// setHelloWorld();