require("@nomiclabs/hardhat-waffle");


const Private_Key = "513bc5dec418be4d5c2764412c9bd60eadf4eccf0064f2d1a7bc98df91934b68";
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
