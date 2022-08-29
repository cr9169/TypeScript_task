import IBook from "./interface";

function nameExists(name: string, booksArray: IBook[]): boolean {
  for (let j = 0; j < booksArray.length; j++) {
    if (name == booksArray[j].name)
      return true;
  }
  return false;
}

function idExists(uid: number, booksArray: IBook[]): boolean {
  for (let j = 0; j < booksArray.length; j++) {
    if (uid == booksArray[j].uid)
      return true;
  }
  return false;
}

function isNumber(str: string): boolean {

  if (typeof str !== 'string') {
    return false;
  }

  if (str.trim() === '') {
    return false;
  }

  return !Number.isNaN(Number(str));
}

function isWord(word: string) {
  return /^[a-zA-Z]+$/.test(word);
}

function getBookByID(uid: number, booksArray: IBook[]): IBook | undefined {
  let bookToFind: IBook | undefined = booksArray.find(book => book.uid == uid);
  return bookToFind;
}

export { idExists, isNumber, nameExists, isWord, getBookByID };