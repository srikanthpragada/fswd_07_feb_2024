import React from 'react'

function SplitBooks({ book }) {
    return (

        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.publisher}</td>
            <td>{(book.price) * (100 - book.disc) / 100}</td>
        </tr>

    )
}

function Split({ arr }) {
    return (
        <>
            <h2>
                Category: {arr.category}
                <hr />
            </h2>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Price</th>
                    </tr>
                    {arr.books.map((book, idx) => <SplitBooks key={idx} book={book} />)}
                </tbody>
            </table>
        </>
    );
}

export default function Catalog() {

    // var books = [
    //     { title: "Java", author: "herbert", category: "edu", publisher: "oracle", price: 2000, disc: 20 },
    //     { title: "JavaEE", author: "schmidth", category: "edu", publisher: "oracle", price: 2500, disc: 10 },
    //     { title: "Gulliver", author: "aurthur", category: "adventure", publisher: "travels", price: 1200, disc: 15 },
    //     { title: "Little giant", author: "kim", category: "adventure", publisher: "universal", price: 1500, disc: 25 },
    //     { title: "Dont breathe", author: "christopher", category: "mystery", publisher: "ufotable", price: 2800, disc: 5 },
    // ];

    var books = {
        edu:
            [{ title: "Java", author: "herbert", publisher: "oracle", price: 2000, disc: 20 },
            { title: "JavaEE", author: "schmidth", publisher: "oracle", price: 2500, disc: 10 }],
        adventure:
            [
                { title: "Gulliver", author: "aurthur", publisher: "travels", price: 1200, disc: 15 },
                { title: "Little giant", author: "kim", publisher: "universal", price: 1500, disc: 25 }]
    }



    return (
        <>
            {Object.keys().map( (k) =>  <Split key={k} arr={books[k]} />)}
        </>
    );
}