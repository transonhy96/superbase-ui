<script>
  import Modal from "$lib/components/shareds/Modal.svelte";
  import { modalStore } from "$lib/store/modal";
  import { chains } from "$lib/utils/wagmi";

  console.log($modalStore)
</script>

<Modal modalId={'NETWORK'} isOpen={$modalStore.NETWORK} title="Networks">
  {#each chains as chain}
    <li>{chain.id} x {chain.name}</li>
  {/each}
</Modal>