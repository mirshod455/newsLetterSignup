const card = document.querySelector('#card');
const button = document.querySelector('.submit-button');
const emailInput = document.querySelector('#email');
const form = emailInput.closest('form');
const successMessageCard = document.querySelector('#success-message');
const closeButton = document.querySelector('.close-button');
const confirmationEmail = document.querySelector('#email-display');

function emailValidation(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validation() {
  const email = emailInput.value;
  if (!email) {
    button.classList.remove('active');
    button.disabled = true;
    emailInput.style.borderColor = '';
    return;
  }
  if (emailValidation(email)) {
    button.classList.add('active');
    button.disabled = false;
    emailInput.style.borderColor = 'green';
  } else {
    button.classList.remove('active');
    button.disabled = true;
    emailInput.style.borderColor = 'red';
  }
}

emailInput.addEventListener('input', validation);
validation();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  if (emailValidation(email)) {
    showSuccessMessage(email);
    emailInput.value = '';
    button.classList.remove('active');
    button.disabled = true;
    emailInput.style.borderColor = '';
  } else {
    alert('Please enter a valid email address.');
  }
});

function showSuccessMessage(email) {
  card.classList.add('hidden');
  successMessageCard.classList.remove('hidden');
  confirmationEmail.innerText = email;
}

closeButton.addEventListener('click', () => {
  successMessageCard.classList.add('hidden');
  card.classList.remove('hidden');
});