<script lang="ts">
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription,
		Transition,
		TransitionChild
	} from '@rgossiaux/svelte-headlessui';
	import { nanoid } from 'nanoid';

	export let isOpen = false;
	export let title = '';
	export let description = '';

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
		class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
		open={isOpen}
		id={id}
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
			<DialogOverlay class="relative w-max h-max">
			<!--				<button class="absolute rounded-full" on:click={() => (isOpen = false)}>-->
			<!--					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>-->
			<!--				</button>-->
			</DialogOverlay>
		</TransitionChild>
    <TransitionChild
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
		<DialogTitle>{title}</DialogTitle>
		<DialogDescription>{description}</DialogDescription>

		<slot></slot>
  </TransitionChild>
	</Dialog>
</Transition>
