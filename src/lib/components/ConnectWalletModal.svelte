<script>
  import Modal from "$lib/components/shareds/Modal.svelte";
  import { modalStore, closeModal } from "$lib/store/modal";
  import { connect } from "@wagmi/core";
	import { connectors } from "../utils/wagmi";
	import Button from "./shareds/Button.svelte";
  import { updateAccount } from "$lib/services/account.service";
  const connectWallet = async () => {
		const findConnector = connectors.find((c) => c.id === 'metaMask');
		if (!findConnector) {
			throw new Error();
		}
    await connect({ chainId: 1, connector: findConnector });
    await updateAccount();
    closeModal('CONNECT_WALLET');
	};

</script>


<Modal modalId={'CONNECT_WALLET'} isOpen={$modalStore.CONNECT_WALLET} title="Connect wallet">

  <Button on:click={connectWallet} >Metamask</Button>

</Modal>