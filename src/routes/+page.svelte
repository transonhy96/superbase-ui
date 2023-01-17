<script>

  import { client } from "../lib/utils/wagmi";
  import { onDestroy, onMount } from "svelte";
	import { WAGMI_RECONNECT } from "../lib/configs";
	import { updateAccount } from "$lib/services/account.service";

  onMount(async() => {
		if(WAGMI_RECONNECT){
			console.log('reconnect');
			await client.autoConnect();
			await updateAccount();
		}
	});

  onDestroy(()=>{
    client.destroy();
  })
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-full bg-black">
</div>


