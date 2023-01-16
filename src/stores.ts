import { injectedConnector } from '$lib/utils/wagmi';
import { writable } from 'svelte/store';

export const alert = writable('Welcome to the to-do list app!');

export const wallet = writable({
  address:'',
  chainId:0,
  connector:injectedConnector
})
export const web3Provider = writable()
