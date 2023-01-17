<script>
  import Modal from "$lib/components/shareds/Modal.svelte";
  import Button from "$lib/components/shareds/Button.svelte";
  import { disconnect } from "@wagmi/core";
	import { closeModal, modalStore } from "$lib/store/modal";
  import { accountStore } from "$lib/store/account";
  import { resetAccount } from "$lib/services/account.service";
  import clsx from "clsx";

  let isLoading = false;

  $:loading = isLoading;
  const disconnectWallet = async ()=>{
    console.log('disconnect');
    isLoading = true;
    closeModal('ACCOUNT_DETAIL');
    await disconnect();
    resetAccount();
    isLoading = false;
  }

</script>


<Modal modalId={'ACCOUNT_DETAIL'} isOpen={$modalStore.ACCOUNT_DETAIL} title="Account detail">
  {#if !loading}
    <div>{$accountStore.isConnected && $accountStore.address}</div>
    <div>Connect with {$accountStore.isConnected && $accountStore.connector}</div>
  {/if}
  <Button on:click={disconnectWallet} class={clsx(loading)}>Disconnect</Button>
</Modal>