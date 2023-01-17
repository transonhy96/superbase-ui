import { writable } from 'svelte/store';

export type MODAL = 'CONNECT_WALLET' | 'ACCOUNT_DETAIL' | 'NETWORK';

const initialModal: Record<MODAL, boolean> = {
	CONNECT_WALLET: false,
	ACCOUNT_DETAIL: false,
	NETWORK: false
};

const modalStore = writable<Record<MODAL, boolean>>(initialModal);

const openModal = (id: MODAL) => {
	modalStore.update((n) => {
		n[id] = true;
		return n;
	});
};
const closeModal = (id: MODAL) => {
	modalStore.update((n) => {
		n[id] = false;
		return n;
	});
};
export { openModal, closeModal, modalStore };
