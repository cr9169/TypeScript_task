import Book from "./interface";

function checkSearchValueType(input: string): boolean {
    return /^\d+$/.test(input);
}

function createNewBook() {
    
}

function getBookByName() {

}

function getBookByID() {

}

export {checkSearchValueType, createNewBook, getBookByID, getBookByName};