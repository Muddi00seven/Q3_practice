require("@nomiclabs/hardhat-waffle");


const Private_Key = "enter private key here";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/9043c5907b4f4696a35189799c013dee",
      accounts: [`0x${Private_Key}`]
    }
  }
};
