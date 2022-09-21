import {useState} from 'react';
import './BookItems.css';
import BookCard from '../../ui/BookCard/BookCard';
import ReadDate from '../ReadDate/ReadDate';

const BookItems = ({title, author, dateRead, pageCount}) => {

    const [newTitle,setNewTitle]= useState(title);

    const clickHandler = () => {
        console.log('algo')
        setNewTitle('actualizado')
    };

    return (
        <BookCard>
            <h2>{newTitle}</h2>
            <h3>{author}</h3>
            <ReadDate dateRead={dateRead}/>
            <p>{pageCount} páginas</p>
            <button onClick={clickHandler}>Cambiar título</button>
        </BookCard>
    )
}

export default BookItems;

