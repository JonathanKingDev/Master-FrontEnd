console.log("************** DELIVERABLE 04 *********************");

interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Cien años de soledad", isRead: false },
  { title: "Don Quijote de la Mancha", isRead: true },
];

function isBookRead(books, titleToSearch) {
  const result = books.find((book) => book.title === titleToSearch);
  return result ? result.isRead : false;
}

console.log(isBookRead(books, "Don Quijote de la Mancha"));
console.log(isBookRead(books, "Cien años de soledad"));
console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));
