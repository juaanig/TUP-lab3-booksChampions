import { useState } from "react";

import './Books.css';

import BookItems from "./BookItems/BookItems";
import BooksFilter from "../filter/BookFilter";

const Books = ({books}) => {
    const [year,setYear] = useState('2021')

    const valueBookFilter = (value) => {
        setYear(value);
    }  
    
    const booksMapped = books.filter((book) =>
        year === "all" ? books : book.dateRead.getFullYear() === parseInt(year)
    )
    .map((book) => 
        <BookItems
        key={book.id}
        title={book.title} 
        author={book.author} 
        dateRead={book.dateRead} 
        pageCount={book.pageCount} 
        />  
    );
  
    return (
        <>
            <BooksFilter valueYear={valueBookFilter} currentYear={year}/>
            <div className='books-container'>
            {booksMapped}          
            </div>
            
        </>
    )
}

export default Books;