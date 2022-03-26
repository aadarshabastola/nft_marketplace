require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
// const privateKey = fs.readFileSync(".secret").toString()

const projectId = "2b5a77b350d44a73ba3da5f9e68677d4"  //save in the environment var

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mummbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: []
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: []
    },
  },
  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
