import hre, { ethers, network } from "hardhat";

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer, randomPerson] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const RPSFactory = await ethers.getContractFactory("RPS");
  const HasherFactory = await hre.ethers.getContractFactory("Hasher");
  const HasherContract = await HasherFactory.deploy();

  const hash = await HasherContract.hash(1, 1);
  const rps = await RPSFactory.deploy(
    hash,
    "0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec",
    { value: 1 }
  );

  await rps.deployed();

  console.log(`RPS has deployed to ${rps.address}`);
  console.log("rps stake ==>", await rps.stake());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
