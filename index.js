import { DateTime } from './modules/Luxon.js';
import Books from './modules/Book-Methods.js';
// import navLink from "./modules/navigation.js";
import {
  listbookShow, addNewBookShow, showContact, listBtn, addbookBtn, contactBtn,
} from './modules/navigation.js';

const myButton = document.querySelector('.btn-list');
// new Books("","");
// addBook();

myButton.addEventListener('click', Books.addBook);
contactBtn.addEventListener('click', showContact);
listBtn.addEventListener('click', listbookShow);
addbookBtn.addEventListener('click', addNewBookShow);

const currentDate = () => {
  const now = DateTime.now();
  const dateShow = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.querySelector('.time').innerHTML = dateShow;
  setTimeout(currentDate, 1000);
};

currentDate();
