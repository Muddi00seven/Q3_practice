const Web3 = require("web3");

const rpcUrl = "https://ropsten.infura.io/v3/9d3abb594bbb4be99e86186d3d9e87de";

const web3 = new Web3(rpcUrl);

const contractAddres = "0x36Ae59b64eF3D347B29E34de8cb75989Df05FD1e";
const contractAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "AgeCaller",
        "type": "event"
    },
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
        let getAllEvent = await contract.getPastEvents("AgeCaller", {
            fromBlock: 0,
            toBlock: "latest"
        });
        console.log("getAllEvent", getAllEvent)
    }
    catch (error) {
        console.log("error", error)
    }
}

contractMehodAsync()
