import React, { useState } from "react";
import {
    deleteBook,
    updateBook
  } from '../api/books';
import {API_ENDPOINT} from "../api/index";

// Material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const addNewBook = async (newTitle, newStart, newEnd) => {
  const response = await fetch(`${API_ENDPOINT}/books`, {
    method: "POST",
    body: JSON.stringify({
      title: newTitle,
      start: newStart,
      end: newEnd
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const Book = ({setBooks, bookId, bookTitle, bookStart, bookEnd}) => {

    // State to update an existing books data
  const [updateNewBookTitle, setNewUpdateBookTitle] = useState(bookTitle);
  const [updateNewBookStart, setNewUpdateBookStart] = useState(bookStart);
  const [updateNewBookEnd, setNewUpdateBookEnd] = useState(bookEnd);

    // Delete a specific book
    const onDeleteBook = async (id) => {
        const responseStatus = await deleteBook(id);
    
        if (responseStatus !== 200) {
          alert("Deleting failed");
          return;
        }
    
        setBooks((previousBooks) =>
          previousBooks.filter((book) => book.id !== id)
        );
      };
    
      // Update a previous book
      const onUpdateBook = async (id, newTitle, newStart, newEnd) => {
        const responseStatus = await updateBook(id, newTitle, newStart, newEnd);
    
        if (responseStatus !== 200) {
          alert("Updating failed");
          return;
        }
    
        setBooks((previousBooks) => {
          const nextBooksState = [...previousBooks];
          const bookToUpdate = nextBooksState.find(
            (book) => book.id === id
          );
    
          bookToUpdate.title = newTitle;
          bookToUpdate.start = newStart;
          bookToUpdate.end = newEnd;
    
          return nextBooksState;
        });
      };
    
    return (
        <form onSubmit={() => {onUpdateBook(bookId, updateNewBookTitle, updateNewBookStart, updateNewBookEnd)}}>
          <Stack key={bookId}>
          <TextField id="standard-basic"
                     label="Title"
                     defaultValue={bookTitle}
                     variant="standard"
                     onChange={e => setNewUpdateBookTitle(e.target.value)}
          />
          <TextField id="standard-basic"
                     label="Start Date"
                     defaultValue={bookStart}
                     variant="standard"
                     onChange={e => setNewUpdateBookStart(e.target.value)}
          />
          <TextField id="standard-basic"
                     label="End Date"
                     defaultValue={bookEnd}
                     variant="standard"
                     onChange={e => setNewUpdateBookEnd(e.target.value)}
          />
          <Button variant="contained"
                  color="success"
                  type="submit"
          >
            Update Book
          </Button>
          <Button variant="contained"
                  color="error"
                  onClick={() => {onDeleteBook(bookId)}}
          >
            Delete Book
          </Button>
        </Stack>
        </form>
        
      )
}
export default Book;