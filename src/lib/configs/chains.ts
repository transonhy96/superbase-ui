import {
	avalanche,
	avalancheFuji,
	bsc,
	bscTestnet,
	fantom,
	goerli,
	localhost,
	mainnet,
	polygon,
	polygonMumbai,
} from '@wagmi/core/chains';

export enum CHAIN_ID {
	ETHEREUM = mainnet.id,
	GOERLI = goerli.id,
	BSC = bscTestnet.id,
	BSC_TESTNET = bscTestnet.id,
	POLYGON = polygon.id,
	POLYGON_TESTNET = polygonMumbai.id,
	AVALANCHE = avalanche.id,
	AVALANCHE_TESTNET = avalancheFuji.id,
	FANTOM = fantom.id,
	FORK = localhost.id
}

export const CHAINS = [bsc, mainnet, bscTestnet, goerli, fantom, avalanche];
