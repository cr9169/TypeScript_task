import Genre from "./enums";

export interface Book {
    name: string,
    author: string,
    uid: number,
    genre: Genre
}

export default Book;