<script>
  import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
  import ConnectWalletModal from "$lib/components/ConnectWalletModal.svelte";
	import AccountDetailModal from '$lib/components/AccountDetailModal.svelte';
  import NetworkModal from "$lib/components/NetworkModal.svelte";

</script>

<div class="app">
	<Header />
  <div class="w-full flex bg-white">
    <Sidebar/>
    <slot />
  </div>
	<Footer/>
  <NetworkModal/>
  <ConnectWalletModal/>
  <AccountDetailModal/>
</div>
