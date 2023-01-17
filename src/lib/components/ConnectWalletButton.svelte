<script lang="ts">
	import Button from '$lib/components/shareds/Button.svelte';
	import { openModal } from "$lib/store/modal";
	import { suppressAddress } from '$lib/utils/address';
	import { accountStore } from "$lib/store/account";

	const openModalClick = () => {
		if($accountStore.isConnected){
			openModal('ACCOUNT_DETAIL');
		}
		else{
			openModal('CONNECT_WALLET');
		}
	};
</script>

<Button
	on:click={openModalClick}
>
	{#if $accountStore.isConnected}
		{suppressAddress($accountStore.address)}
	{:else}
		Connect wallet
	{/if}
</Button>
