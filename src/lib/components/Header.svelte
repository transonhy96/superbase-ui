<script>
	import ConnectWalletButton from "./shareds/ConnectWalletButton.svelte";

</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="#top" class="btn btn-ghost normal-case text-xl">Superbase</a>
	</div>
  <div class="flex gap-4">
    <button class="btn rounded-3xl no-animation"> Network </button>
    <ConnectWalletButton/> 
    <button class="btn btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
  </div>
</div>
