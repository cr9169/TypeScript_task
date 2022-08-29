import Book from "./interface"
import config from "../config";
import express from "express";
import {checkSearchValueType, createNewBook, getBookByID, getBookByName} from "./actions";
const app = express();
const PORT = config.SERVER_PORT;
const booksArray : number[] = []; 

let age : number = 10; 
console.log(config);

app.use(express.json());

app.post('/api/validate', (request, response) => {

    const book = request.body;
    console.log(typeof(book));

    let array : any[] = request.body;

    array.forEach((element: any) => {
            console.log(element);
        }, this);
    response.status(200).send("success!!!");
});

app.listen(PORT, () => {
    console.log("server is listening to port " + PORT);
});


