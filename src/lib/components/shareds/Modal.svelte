<script lang="ts">
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription,
		Transition,
		TransitionChild
	} from '@rgossiaux/svelte-headlessui';
	export let isOpen = false;
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
		class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
		open={isOpen}
		on:close={() => (isOpen = false)}
	>
		<TransitionChild
			enter="ease-out duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<DialogOverlay />
		</TransitionChild>
    <TransitionChild
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
		<DialogTitle>Deactivate account</DialogTitle>
		<DialogDescription>This will permanently deactivate your account</DialogDescription>

		<p>
			Are you sure you want to deactivate your account? All of your data will be permanently
			removed. This action cannot be undone.
		</p>
  </TransitionChild>
	</Dialog>
</Transition>
