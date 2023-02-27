async function main() {
	const SidContract = await ethers.getContractFactory("SidContract");
	const gasPrice = await SidContract.signer.getGasPrice();
	console.log(`Current gas price: ${gasPrice}`);
	const estimatedGas = await SidContract.signer.estimateGas(
		SidContract.getDeployTransaction()
	);
	console.log(`Estimated gas: ${estimatedGas}`);
	const deploymentPrice = gasPrice.mul(estimatedGas);
	const deployerBalance = await SidContract.signer.getBalance();
	console.log(`Deployer balance:  ${ethers.utils.formatEther(deployerBalance)}`);
	console.log( `Deployment price:  ${ethers.utils.formatEther(deploymentPrice)}`);
	if (Number(deployerBalance) < Number(deploymentPrice)) {
		throw new Error("You dont have enough balance to deploy.");
	}
	// Start deployment, returning a promise that resolves to a contract object
	const myNFT = await SidContract.deploy();
	await myNFT.deployed();
	console.log("Contract deployed to address:", myNFT.address);
}
main().then(() => process.exit(0)).catch((error) => {
	console.error("Error:", error);
	process.exit(1);
});
