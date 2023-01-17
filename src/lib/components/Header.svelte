<script>
	import ConnectWalletButton from "./ConnectWalletButton.svelte";
  import Button from "$lib/components/shareds/Button.svelte";
  import { openModal } from "$lib/store/modal";
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="#top" class="btn btn-ghost normal-case text-xl">Superbase</a>
	</div>
  <div class="flex gap-4">
    <Button on:click={()=>{openModal('NETWORK')}} > Network </Button>
    <ConnectWalletButton/>
  </div>
</div>
