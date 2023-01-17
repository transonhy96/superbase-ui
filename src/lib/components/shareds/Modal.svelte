<script lang="ts">
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
    Transition,
    TransitionChild
  } from "@rgossiaux/svelte-headlessui";
  import { nanoid } from "nanoid";
  import type { MODAL } from "$lib/store/modal";
  import { closeModal } from "$lib/store/modal.js";

  export let isOpen = false;
  export let title = "";
  export let description = "";

  export let modalId: MODAL;

  export let id = nanoid();
</script>

<Transition
  appear
  show={isOpen}
  enter="ease-out duration-300"
  enterFrom="opacity-0"
  enterTo="opacity-100"
  leave="ease-in duration-200"
  leaveFrom="opacity-100"
  leaveTo="opacity-0"
>
  <Dialog
    class="relative z-10"
    open={isOpen}
    id={id}
    on:close={() => {
			isOpen = false;
			closeModal(modalId);
		}}
  >
    <div class="fixed inset-0 bg-black bg-opacity-25" />
    <TransitionChild
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div class="fixed inset-0 overflow-y-auto bg-white">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <slot></slot>
        </div>
      </div>
    </TransitionChild>
  </Dialog>
</Transition>
