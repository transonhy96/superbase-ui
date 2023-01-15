// Imports
import memoize from 'lodash/memoize';
import {
  createClient,
  configureChains
} from '@wagmi/core';
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';
import { InjectedConnector } from '@wagmi/core/connectors/injected';
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect';
import { CoinbaseWalletConnector } from '@wagmi/core/connectors/coinbaseWallet';
import { LedgerConnector } from '@wagmi/core/connectors/ledger';
import {jsonRpcProvider} from '@wagmi/core/providers/jsonRpc'
import { CHAINS } from '$lib/configs/chains';

export const WAGMI_RECONNECT = true;

export const { provider, chains } = configureChains(CHAINS, [
  jsonRpcProvider({
    rpc: (chain) => {
      return { http: chain.rpcUrls.default.http[0] }
    },
  }),
])

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})

export const coinbaseConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: 'Oakland',
    appLogoUrl: '',
  },
})

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: true,
  },
})

export const walletConnectNoQrCodeConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: false,
  },
})

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})


const ledgerConnector = new LedgerConnector({
  chains,
})

export const connectors =  [
  metaMaskConnector,
  injectedConnector,
  coinbaseConnector,
  walletConnectConnector,
  ledgerConnector,
];
export const client = createClient({
  autoConnect: WAGMI_RECONNECT,
  provider,
  connectors
})

export const CHAIN_IDS = chains.map((c) => c.id);

export const isChainSupported = memoize((chainId: number) => CHAIN_IDS.includes(chainId));

export const isChainTestnet = memoize((chainId: number) => chains.find((c) => c.id === chainId)?.testnet);
