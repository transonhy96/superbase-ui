<script>
	import ConnectWalletButton from "./ConnectWalletButton.svelte";
  import { getAccount } from "@wagmi/core";
  import { suppressAddress } from "../../utils/address";
  import Button from "$lib/components/shareds/Button.svelte";
  import { toggleModal } from "../../stores.js";

  let {address} = getAccount();

  const openModal = ()=>{
    toggleModal()
  }
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="#top" class="btn btn-ghost normal-case text-xl">Superbase</a>
	</div>
  <div class="flex gap-4">
    <button class="btn rounded-3xl no-animation"> Network </button>
    {#if address !== ''}
      <Button on:click={openModal} >{suppressAddress(address)}</Button>
    {:else}
      <ConnectWalletButton/>
    {/if}

  </div>
</div>
