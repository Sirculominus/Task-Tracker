const Tasks = artifacts.require("Tasks");

module.exports = async function(deployer) {
	//deploy Tasks
	await deployer.deploy(Tasks)
	
};