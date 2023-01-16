import { writable } from 'svelte/store';
import { injectedConnector } from "./utils/wagmi";

export const alert = writable('Welcome to the to-do list app!');
export const modals = writable<string[]>([]);

export const toggleModal = (id:string)=>{
  modals.update(s => {
    if(!s.includes(id)){
      s.push(id)
    }
    return s;
  })
}

export const wallet = writable({
  address:'',
  chainId:0,
  connector:injectedConnector
})
export const web3Provider = writable()
