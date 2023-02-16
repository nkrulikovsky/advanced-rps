import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const GOERLI_URL = process.env.GOERLI_URL || "";

const PK_USER = process.env.PK_USER || "";

const config: HardhatUserConfig = {
  solidity: "0.4.26",
  typechain: {
    outDir: "frontend/typechain",
    target: "ethers-v5",
  },
  networks: {
    hardhat: {
      chainId: 1337, // We set 1337 to make interacting with MetaMask simpler
    },
    georli: {
      chainId: 5,
      url: GOERLI_URL,
      accounts: [PK_USER],
    },
  },
};

export default config;
