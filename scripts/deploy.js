// Import ethers from Hardhat Package
const { ethers } = require("hardhat");

async function main() {

    /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our GameItem contract.
*/
    const nftContract = await ethers.getContractFactory("GameItem");

    // Deploying our contract
    const deployedNFTContract = await nftContract.deploy();

    // Getting the address of the deployed contract
    console.log("NFT Contract Address", deployedNFTContract.address);

}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });