const book = JSON.parse(localStorage.getItem('our-books')) || [];

const inputTitle = document.querySelector('#texttitle');
const inputAuthor = document.querySelector('#txtauthor');
const list = document.getElementById('book-list');

export default class Books {
  static disp() {
    if (book.length === 0) {
      list.innerText = 'No Books To Display';
      return 0;
    }
    list.innerHTML = '';
    let i = -1;

    book.forEach((item) => {
      const tr = document.createElement('tr');
      tr.setAttribute('class', 'book-row');
      tr.innerHTML = ` <td>"${item.title}" &nbsp by &nbsp ${item.author}</td> 
        <td><button class="delete-btn btn btn-outline-primary" id="${i += 1}">Remove</button></td>
      `;
      list.appendChild(tr);
    });
    const buttonItem = document.querySelectorAll('.delete-btn');
    buttonItem.forEach((item) => {
      item.addEventListener('click', (e) => {
        const delButton = e.target;
        list.deleteRow(delButton.id);
        book.splice(delButton.id, 1);
        localStorage.setItem('our-books', JSON.stringify(book));
        Books.disp();
      });
    });
    return 0;
  }

  static addBook(e) {
    if (inputTitle.value && inputAuthor.value !== '') {
      e.preventDefault();
      const bookData = { title: inputTitle.value, author: inputAuthor.value };
      book.push(bookData);
      localStorage.setItem('our-books', JSON.stringify(book));
      Books.disp();
      document.querySelector('form').reset();
    }
  }
}

Books.disp();
