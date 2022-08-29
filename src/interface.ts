import Genre from "./enums";

export interface IBook {
    name: string,
    author: string,
    uid: number,
    genre: Genre
}

export default IBook;