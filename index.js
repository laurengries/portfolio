const openCheckbox = document.querySelector('.hidden-nav-checkbox1');
const closeCheckbox = document.querySelector('.hidden-nav-checkbox2');
const hiddenNavBar = document.querySelector('.hidden-navbar');

openCheckbox.addEventListener('change', () => {
  if (openCheckbox.checked) {
    hiddenNavBar.style.display = 'flex';  // Show popup when checked
  } else {
    hiddenNavBar.style.display = 'none';  // Hide popup when unchecked
  }
});

closeCheckbox.addEventListener('change', () => {
  if (closeCheckbox.checked) {
    hiddenNavBar.style.display = 'none';  // Close popup when checked
    openCheckbox.checked = false;  // Uncheck the open checkbox
  }
});
