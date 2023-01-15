<script lang="ts">
    import {connect} from '@wagmi/core';
    import { connectors } from '$lib/utils/wagmi';
    const connectWallet = async()=>{
        const findConnector = connectors.find((c) => c.id === 'metaMask');
        console.log({findConnector})
        if (!findConnector) {
            throw new Error();
        }
        await connect({chainId:1,connector:findConnector});
    }

</script>
<svelte:head>
	<title>Superbase</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<button on:click={connectWallet}>Connect</button>
</div>


