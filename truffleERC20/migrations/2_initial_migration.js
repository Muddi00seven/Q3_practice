const PIAICBCCToken = artifacts.require("PIAICBCCToken");

module.exports = async function (deployer,network,accounts) {
 await deployer.deploy(PIAICBCCToken);
};
