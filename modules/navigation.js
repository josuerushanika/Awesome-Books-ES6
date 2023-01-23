const sec1 = document.querySelector('.section1');
const sec2 = document.querySelector('.section2');
const sec3 = document.querySelector('.section3');
const listBtn = document.getElementById('books-lists');
const addbookBtn = document.getElementById('addNewbook');
const contactBtn = document.getElementById('contact');
// Single page App functions
const listbookShow = () => {
  sec1.classList.remove('no-display');
  sec2.classList.add('no-display');
  sec3.classList.add('no-display');
  listBtn.classList.add('active-btn');
  addbookBtn.classList.remove('active-btn');
  contactBtn.classList.remove('active-btn');
};
const addNewBookShow = () => {
  sec2.classList.remove('no-display');
  sec1.classList.add('no-display');
  sec3.classList.add('no-display');
  addbookBtn.classList.add('active-btn');
  listBtn.classList.remove('active-btn');
  contactBtn.classList.remove('active-btn');
};
const showContact = () => {
  sec3.classList.remove('no-display');
  sec1.classList.add('no-display');
  sec2.classList.add('no-display');
  contactBtn.classList.add('active-btn');
  addbookBtn.classList.remove('active-btn');
  listBtn.classList.remove('active-btn');
};

export {
  listbookShow, addNewBookShow, showContact, listBtn, addbookBtn, contactBtn,
};