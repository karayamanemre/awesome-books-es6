import showContact from './modules/showContact.js';
import showAdd from './modules/showAdd.js';
import showList from './modules/showList.js';
import showTime from './modules/showTime.js';
import Books from './modules/manageBooks.js';

Books.addBooks();
Books.showBooks();
Books.removeBooks();

showList();
showAdd();
showContact();
setInterval(showTime, 1);