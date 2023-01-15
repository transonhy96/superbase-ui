import { avalanche, avalancheFuji, bsc, bscTestnet, fantom, goerli,
     localhost, mainnet, polygon, polygonMumbai, type Chain } from '@wagmi/core/chains';

export enum CHAIN_ID {
  ETHEREUM = 1,
  GOERLI = 3,
  BSC = 56,
  BSC_TESTNET = 97,
  POLYGON = 137,
  POLYGON_TESTNET = 80001,
  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,
  FANTOM = 250,
  FORK = 31339,
}

export const CHAINS = [bsc, mainnet, bscTestnet, goerli,fantom,avalanche];

export const CHAIN_STORES: { [chainId in CHAIN_ID as number]: Chain } = {
  [CHAIN_ID.ETHEREUM as number]: mainnet,
  [CHAIN_ID.GOERLI as number]: goerli,
  [CHAIN_ID.BSC as number]: bsc,
  [CHAIN_ID.BSC_TESTNET as number]: bscTestnet,
  [CHAIN_ID.POLYGON as number]: polygon,
  [CHAIN_ID.POLYGON_TESTNET as number]: polygonMumbai,
  [CHAIN_ID.AVALANCHE as number]: avalanche,
  [CHAIN_ID.AVALANCHE_TESTNET as number]: avalancheFuji,
  [CHAIN_ID.FANTOM as number]: fantom,
  [CHAIN_ID.FORK as number]: localhost,
};