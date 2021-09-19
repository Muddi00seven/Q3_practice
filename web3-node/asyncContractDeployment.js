const Tx = require('ethereumjs-tx');
const Web3 = require("web3");

const rpcUrl = "https://ropsten.infura.io/v3/9d3abb594bbb4be99e86186d3d9e87de";

const web3 = new Web3(rpcUrl);

const account = "0xFeCc7f386CfEAc48EB0c0cc84d749AAE1f2ddEf9";
const privateKey = "be6254367e70408d12672cce1c0a1f389746ebfba2e4f3a35d35879ab05efbb6";

const byteCode = "608060405234801561001057600080fd5b5061019c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063262a9dff14610046578063967e6e6514610064578063d5dcf12714610082575b600080fd5b61004e6100b2565b60405161005b9190610125565b60405180910390f35b61006c6100b8565b6040516100799190610125565b60405180910390f35b61009c600480360381019061009791906100e9565b6100c1565b6040516100a99190610125565b60405180910390f35b60005481565b60008054905090565b6000816000819055506000549050919050565b6000813590506100e38161014f565b92915050565b6000602082840312156100ff576100fe61014a565b5b600061010d848285016100d4565b91505092915050565b61011f81610140565b82525050565b600060208201905061013a6000830184610116565b92915050565b6000819050919050565b600080fd5b61015881610140565b811461016357600080fd5b5056fea2646970667358221220e25f4b500668abf37e2c5354500d0155a60833037085de91721aad3682fb31f364736f6c63430008060033";

const byteCodeBuffer = Buffer.from(byteCode, "hex");

const privateKeyBuffer = Buffer.from(privateKey, "hex");

const contractDeployAsync = async () => {
    try {
        const txCount = await web3.eth.getTransactionCount(account);
        const txObj = {
            nonce: web3.utils.toHex(txCount),
            data: byteCodeBuffer,
            gasLimit: web3.utils.toHex(500000),
            gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei"))
        }
        const tx = new Tx.Transaction(txObj, { chain: "ropsten", hardfork: "petersburg" });
        tx.sign(privateKeyBuffer);
        const serializedTx = tx.serialize();
        const raw = "0x" + serializedTx.toString('hex');
        const signedTransaction = await web3.eth.sendSignedTransaction(raw);
        console.log("signedTransaction", signedTransaction)
    }
    catch (error) {
        console.log("error", error)
    }
}
contractDeployAsync()
