/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;
const PRIVKEY = process.env.PRIVATE_KEY;


console.log(`0x${PRIVKEY}`);
module.exports = {
     solidity: "0.8.17",
     defaultNetwork: "ropsten",
     networks: {
        hardhat: {},
        ropsten: { 
            url: API_URL,
            accounts: [`0x${PRIVKEY}`],
           },
       },
  };

