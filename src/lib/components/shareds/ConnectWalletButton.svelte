
<script lang="ts">
	import { connect } from '@wagmi/core';
	import { connectors } from '$lib/utils/wagmi';
	const connectWallet = async () => {
		const findConnector = connectors.find((c) => c.id === 'metaMask');
		if (!findConnector) {
			throw new Error();
		}
		await connect({ chainId: 1, connector: findConnector });
	};

</script>

<button class="btn rounded-3xl no-animation" on:click={connectWallet}> Connect wallet </button>
