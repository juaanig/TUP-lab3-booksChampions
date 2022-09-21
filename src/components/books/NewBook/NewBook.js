import { useState } from "react";
import "./NewBook.css"

import BookForm from "../BookForms/BookForm";

const NewBook = ({saveBook}) => {

  const [showForm,setShowFrom] = useState(false);

  const saveBookDataHnadler = (bookData) =>{

    const bookDataWithId = {
      ...bookData,
      id: Math.random().toString(),
    }
    saveBook(bookDataWithId);
  };

  const showFormHandler = () => {
    setShowFrom(true)
  }

  const cancelAdd = () => {
    setShowFrom(false)
  }


  return (
    <div className='new-book'>
        {showForm ? <BookForm saveBookData={saveBookDataHnadler} onCancel={cancelAdd}/> : <button onClick={showFormHandler}>Agregar nueva lectura</button>}
    </div>
  )
}

export default NewBook;