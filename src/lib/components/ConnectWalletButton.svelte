
<script lang="ts">
	import { connect } from '@wagmi/core';
  import { connectors } from "../../utils/wagmi";
  import Button from "$lib/components/shareds/Button.svelte";
	const connectWallet = async () => {
		const findConnector = connectors.find((c) => c.id === 'metaMask');
		if (!findConnector) {
			throw new Error();
		}
		await connect({ chainId: 1, connector: findConnector });
	};

</script>

<Button on:click={connectWallet}> Connect wallet </Button>
