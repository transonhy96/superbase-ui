<script>

  import { client } from "../utils/wagmi";
  import { onDestroy, onMount } from "svelte";

  onMount(async() => {
    await client.autoConnect();
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


