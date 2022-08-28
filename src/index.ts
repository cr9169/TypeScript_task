import Book from "./interface"
import config from "../config";
import express from "express";
import {checkSearchValueType, createNewBook, getBookByID, getBookByName} from "./actions";
const app = express();
const PORT = config.SERVER_PORT;

let age : number = 10; 
console.log(config);

app.use(express.json());

/*app.post('/api/numbers/prime/validate', (request, response) => {
    
    isAllPrimes = true;

    let array = request.body;
    array.forEach((element) => {
        if(!isRishoni(element, element - 1))
            isAllPrimes = false;
    }, this);

    response.status(200).send(isAllPrimes.toString());
});*/


