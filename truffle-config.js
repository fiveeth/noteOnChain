const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

// contract address: 0x82255c2b036e3bE90269093311601c2df5977875

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/8c6c02fa9f0543faaa8e1e1fd92b624f")
      },
      network_id: 3,
      gas: 7003605,
      gasPrice: 100000000000,
    } 
  },
  compilers: {
    solc: {
      version: "0.8.13", 
    }
  }
};