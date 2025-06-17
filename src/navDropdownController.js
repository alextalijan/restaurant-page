import toggleDropdown from './toggleDropdown.js';

const navDropdownController = function () {
  const dropdownBtn = document.querySelector('.nav-dropdown-btn');
  dropdownBtn.addEventListener('click', () => toggleDropdown('.navbar'));
};

export default navDropdownController;
