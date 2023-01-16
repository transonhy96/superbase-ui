<script>
  import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
  import { alert , modals } from '../stores';
  import ConnectWalletModal from "$lib/components/ConnectWalletModal.svelte";
</script>

<div class="app">
	<Header />
  <div class="w-full flex bg-white">
    <Sidebar/>
    <slot />
  </div>
	<Footer/>
  {#if $alert}
    <div>
      <p>{ $alert }</p>
    </div>
  {/if}
  <ConnectWalletModal/>
</div>
