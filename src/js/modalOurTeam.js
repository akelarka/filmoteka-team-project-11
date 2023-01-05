const refs = {
  openModalOurTeam: document.querySelector("[data-open-modal_our-team]"),
  closeModalOurTeam: document.querySelector("[data-close-modal_our-team]"),
  modalOurTeam: document.querySelector("[data-modal_our-team]"),  
    
  socialIcons: document.querySelectorAll('.social-icons'),
  listEmployeItem: document.querySelectorAll('.list-employees-item'),
  titleModalOurTeam: document.querySelector('.title_modal_our-team'),
  iconClose: document.querySelector('.icon-close'),
  modalTeam: document.querySelector('.modal_our-team'),
  socialIconsDisabled: document.querySelectorAll('.social-icons__disabled'),

};

refs.openModalOurTeam.addEventListener("click", openModalOurTeam);

function openModalOurTeam() {
  refs.modalOurTeam.classList.remove('is-hidden'); 
  addEventListeners();
}

function closeModal(event) {
  if (event.target.classList.contains('backdropp') || event.key === "Escape"
    || event.currentTarget.classList.contains('button-close-modal')) {
    refs.modalOurTeam.classList.add('is-hidden');
    removeEventListeners();
  }
}

function removeEventListeners() {
  document.removeEventListener('keydown', closeModal);
  refs.modalOurTeam.removeEventListener('click', closeModal);
  refs.closeModalOurTeam.removeEventListener('click', closeModal);
}

function addEventListeners() {
  document.addEventListener('keydown', closeModal);
  refs.modalOurTeam.addEventListener('click', closeModal);
  refs.closeModalOurTeam.addEventListener('click', closeModal);
}

function chengeDarkThemModalOurTeam({socialIcons, listEmployeItem, titleModalOurTeam, iconClose,modalOurTeam, socialIconsDisabled }) {
  socialIcons.forEach(element => element.classList.add('social-icons__themDark'));
  socialIconsDisabled.forEach(element => element.classList.add('social-icons__disabled--themDark'));
  listEmployeItem.forEach(element => element.classList.add('list-employees-item__themDark'));
  iconClose.classList.add('icon-close__themDark');
  modalTeam.classList.add('modal_our-team__themDark');
  titleModalOurTeam.classList.add('title_modal_our-team__themDark');

};



function chengeLightThemModalOurTeam({ socialIcons, listEmployeItem, titleModalOurTeam, iconClose, modalOurTeam, socialIconsDisabled }) {
  socialIcons.forEach(element => element.classList.remove('social-icons__themDark'));
  socialIconsDisabled.forEach(element => element.classList.remove('social-icons__disabled--themDark'));
  listEmployeItem.forEach(element => element.classList.remove('list-employees-item__themDark'));
  iconClose.classList.remove('icon-close__themDark');
  modalTeam.classList.remove('modal_our-team__themDark');
  titleModalOurTeam.classList.remove('title_modal_our-team__themDark');
};


