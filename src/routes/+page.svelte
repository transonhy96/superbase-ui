<script>
	import Modal from "$lib/components/shareds/Modal.svelte";
	import { getAccount } from "@wagmi/core";
	import { ethers } from "ethers";
	import { onMount } from "svelte";
  import { alert, web3Provider } from '../stores';


  onMount(async() => {
    const {connector} = getAccount();
    console.log({connector});
    if(connector){
      const provider = await connector?.getProvider();
      console.log({provider});
      $web3Provider = new ethers.providers.Web3Provider(provider);
    }
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="container bg-white dark:bg-black h-screen">
    {#if $alert}
    <div>
      <p>{ $alert }</p>
    </div>
    {/if}
  </div>
  <Modal isOpen={false}></Modal>
</section>


