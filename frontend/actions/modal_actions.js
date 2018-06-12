export const OPEN_MODAL = 'OPEN_MODEL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => ({
  type: OPEN_MODAL,
  modal
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})

