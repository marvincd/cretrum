const HDWalletProvider = require("@truffle/hdwallet-provider");
// create a file at the root of your project and name it .env -- there you can set process variables
// like the mnemonic etc. Note: .env is ignored by git to keep your private information safe

require("dotenv").config();

const mnemonic = process.env["MNEMONIC"].toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    opBNBTestnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://opbnb-testnet-rpc.bnbchain.org`
        ),
      network_id: 5611,
      confirmations: 3,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19",
    },
  },
};