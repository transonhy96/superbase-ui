import { fetchBalance, getAccount, getProvider } from "@wagmi/core";
import { accountStore, initialAccount } from "$lib/store/account";
import BigNumber from "bignumber.js";

export const updateAccount = async ()=>{
  const {isConnected,address,connector} = getAccount();
  const provider = getProvider();
  if(isConnected && address && connector){
    const bal = await fetchBalance({address:address,chainId:provider.network.chainId});
    accountStore.update((s)=>{
      s = {
        address:address.toString(),
        balance: new BigNumber(bal.value.toString()).div(bal.decimals).toNumber(),
        connector:connector.id,
        chainId:provider.network.chainId,
        isConnected:isConnected
      };
      return s;
    });
  }
}

export const resetAccount = ()=>{
  accountStore.update((s)=>{
    s = initialAccount;
    return s;
  });
}