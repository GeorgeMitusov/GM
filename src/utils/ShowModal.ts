export function showModal(): void {
  
  const modal = document.getElementById("my_modal_2") as HTMLDialogElement | null;

  if (modal && typeof modal.showModal === 'function') {
    modal.showModal();
  }
}