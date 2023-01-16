<script>
  import Modal from "$lib/components/shareds/Modal.svelte";
  import Button from "$lib/components/shareds/Button.svelte";
  import { disconnect } from "@wagmi/core";


  const disconnectWallet = async ()=>{
    await disconnect()
  }

</script>


<Modal isOpen={true} title="Account detail">
  <Button on:click={disconnectWallet}>Disconnect</Button>
</Modal>