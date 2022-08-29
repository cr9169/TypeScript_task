import IBook from "./interface"
import config from "../config";
import express from "express";
import Genre from "./enums"; 
import {idExists, isNumber, nameExists, isWord, getBookByID} from "./actions";
const app = express();
const PORT = config.SERVER_PORT;
const booksArray : IBook[] = []; 

//let age : number = 10; 
//console.log(config);

app.use(express.json());

app.post('/api/validate', (request, response) => {

    const book: IBook = request.body;
    if(!idExists(book.uid, booksArray) )
    {
            booksArray.push(book);
            console.log(booksArray);
    }
    else 
        console.error("id already exists!");
    response.status(200).send("success!!!");
});

app.get('/api/validate/val', (request, response) => {

    let value : any = request.query.value;

    if(typeof(value) != undefined)
    {
        let value = request.query.value!;

        if(isNumber(value.toString())) { 
            if(idExists(Number(value), booksArray))
                console.log(getBookByID(Number(value), booksArray)); 
        }
        if(isWord(value.toString())) {
        booksArray.forEach((book) => { 
            if(nameExists(value.toString(), booksArray))
                console.log(book); 
        });
        }
    }

    response.status(200).send("success!!!");
});

app.listen(PORT, () => {
    console.log("server is listening to port " + PORT);
});


