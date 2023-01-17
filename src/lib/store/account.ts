import { writable } from 'svelte/store';

export type Account = {
  address:string,
  balance:number,
  chainId:number,
  connector:string,
  isConnected:boolean,
}


export const initialAccount: Account = {
  address:'',
  balance:0,
  chainId:0,
  connector:'',
  isConnected:false,
};

export const accountStore = writable<Account>(initialAccount);


