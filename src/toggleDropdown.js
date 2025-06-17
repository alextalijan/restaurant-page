export default function toggleDropdown(elementID) {
  const dropdown = document.querySelector(elementID);
  dropdown.classList.toggle('visible');
}
