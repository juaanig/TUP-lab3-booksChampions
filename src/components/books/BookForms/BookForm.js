import {useState} from 'react' ;
import './BookForm.css'

const BookForm = ({saveBookData,onCancel}) => {

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAuthor,setEnteredAuthor] = useState('');
    const [enteredPageCount,setEnteredPageCount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const changeTitleHandler = (event)=>{
        setEnteredTitle(event.target.value)
    }

    const changeAuthorHandler = (event)=>{
        setEnteredAuthor(event.target.value)
    }

    const changePageCountHandler = (event)=>{
        setEnteredPageCount(event.target.value)
    }

    const changeDateHandler = (event)=>{
        setEnteredDate(event.target.value)
    }

    const submitBookHandler = (event) =>{
        event.preventDefault();
        const bookData = {
            title: enteredTitle,
            author:enteredAuthor,
            pageCount: enteredPageCount,
            dateRead: new Date(enteredDate)
        };
        console.log(bookData)

        saveBookData(bookData);

        setEnteredTitle("");
        setEnteredAuthor("");
        setEnteredPageCount("");
        setEnteredDate("");
    }
    
    const cancelSubmiHandler = () =>{
        onCancel();
    }


    return( 
        <form>
            <div className='new-book-controls'>
                <div className='new-book-control'>
                    <label>Titulo</label>
                    <input value={enteredTitle} onChange={changeTitleHandler} type='text'/>
                </div>
                <div className='new-book-control'>
                    <label>Autor</label>
                    <input value={enteredAuthor} onChange={changeAuthorHandler} type='text'/>
                </div>
                <div className='new-book-control'>
                    <label>Cantidad de págians</label>
                    <input value={enteredPageCount} onChange={changePageCountHandler} type='number' min='1' step='1' />
                </div>
                <div className='new-book-control'>
                    <label>¿Cunado terminaste de leerlo?</label>
                    <input value={enteredDate} onChange={changeDateHandler} type='date' min='2019-01-01' max='2023-12-31' />
                </div>
            </div>
            <div className='new-book-actions'>
                <button onClick={submitBookHandler} type='submit'>Agregar </button>    
                <button onClick={cancelSubmiHandler} type='submit'>Cancelar</button>    
            </div>
        </form> 
        )
}

export default BookForm