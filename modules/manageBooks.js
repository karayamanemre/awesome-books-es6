export default class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now().toString();
  }

  static addBooks() {
    const Title = document.getElementById('title');
    const Author = document.getElementById('author');
    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let booksList = [];
      booksList = JSON.parse(localStorage.getItem('books') || '[]');

      if (Title.value === '' || Author.value === '') {
        document.getElementById('message').innerHTML = '*Please provide a title and author.';
      } else {
        document.getElementById('message').innerHTML = '*Book added to the list.';
        const newBook = new Books(Title.value, Author.value);
        booksList.push(newBook);
        localStorage.setItem('books', JSON.stringify(booksList));
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        window.location.reload();
      }
    });
  }

  static showBooks() {
    const list = document.getElementById('book-list');
    let booksList = [];
    booksList = JSON.parse(localStorage.getItem('books') || '[]');
    booksList.forEach((book) => {
      list.innerHTML += `
      <div class="book">
      <span>"${book.title}" by ${book.author}</span>
      <button class= "delete button" id="${book.id}">Remove</button>
      </div>
      `;
    });
  }

  static removeBooks() {
    const rmvBtn = document.querySelectorAll('.delete');
    rmvBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        let booksList = JSON.parse(localStorage.getItem('books'));
        booksList = booksList.filter((book) => book.id !== e.target.id);
        localStorage.setItem('books', JSON.stringify(booksList));
        window.location.reload();
      });
    });
  }
}
