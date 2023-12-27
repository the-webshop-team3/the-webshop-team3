import "./../scss/style.scss";



const buyButton = document.getElementById('modalButton') as HTMLButtonElement;
buyButton.addEventListener('click', handlePurchase);

function handlePurchase(event: Event) {

event.preventDefault()
  showPurchaseModal();
}

function showPurchaseModal() {
  const modal = document.getElementById('purchaseModal') as HTMLDivElement;
  modal.style.display = 'block';

  const closeModalButton = document.getElementById('closeModalButton') as HTMLButtonElement;
  closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}


