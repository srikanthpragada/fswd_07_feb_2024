import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import {BOOKS_URL} from './constants'
import { Link } from "react-router-dom";

export default function ListBooks() {
    const [books, setBooks] = useState([])

    useEffect(() => getBooks(), [])

    function getBooks() {
        $.get(BOOKS_URL,
            (result) => {
                setBooks(result)
            }
        ) // get
    }

    function updateBooks(id) {
        setBooks( books.filter( b => b.id !== id))
    }

    function deleteBook(id) {
        if (!window.confirm("Do you really want to delete?"))
            return;
            
        $.ajax(
            {
                url: `${BOOKS_URL}/${id}`,
                method: 'delete',
                success: function () {
                    alert("Book deleted successfully!")
                    updateBooks(id) // update books in memory 
                },
                error: function (error) {
                    console.log(error)
                    alert("Sorry! Could not delete book!")
                }
            }
        )
    }


    return (
        <>
            <h3>List of Books</h3>
            {
                books && books.length > 0 ?
          
                <table className="table table-bordered">
                    <thead>
                        <tr>
                                <th>Title</th>
                                <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book) =>
                                <tr key={book.id}>
                                    <td>{book.title} </td>
                                    <td className="text-end">{book.price}</td>
                                    <td className="text-center" style={{ width: '30%' }}>
                                        <button onClick={() => deleteBook(book.id)}
                                            className="btn btn-danger">Delete</button>
                                        &nbsp;
                                        <Link to={`/details/${book.id}`}
                                            className="btn btn-success">Details</Link>
                                        &nbsp;
                                        <Link to={`/edit/${book.id}`}
                                            className="btn btn-info">Edit</Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>
                    : <h3>Sorry! No books found!</h3>
            }
        </>
    )
}
