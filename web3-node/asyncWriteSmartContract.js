const Web3 = require("web3");
var Tx = require('ethereumjs-tx');
const rpcUrl = "https://ropsten.infura.io/v3/9d3abb594bbb4be99e86186d3d9e87de";
const web3 = new Web3(rpcUrl);

const account = "0xFeCc7f386CfEAc48EB0c0cc84d749AAE1f2ddEf9";
const privateKey = "be6254367e70408d12672cce1c0a1f389746ebfba2e4f3a35d35879ab05efbb6";
const privateKeyBuffer = Buffer.from(privateKey, "hex");

const contractAddres = "0x6D35A0A389fbc9a5549Fc96D71d9A3EB69Db8C01";
const contractAbi = [
    {
        "inputs": [],
        "name": "age",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAge",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_age",
                "type": "uint256"
            }
        ],
        "name": "setAge",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
const contractMehodAsync = async () => {
    try {
        const contract = new web3.eth.Contract(contractAbi, contractAddres);
        const txCount = await web3.eth.getTransactionCount(account);
        const txObj = {
            nonce: web3.utils.toHex(txCount),
            to: contractAddres,
            data: contract.methods.setAge(19).encodeABI(),
            gasLimit: web3.utils.toHex(100000),
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

contractMehodAsync()

