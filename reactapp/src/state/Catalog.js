import React from 'react'

function DisplayBook({ book }) {
    return (
        <tr>
            <td style={{ width: "30%", fontWeight: 'bold' }}>{book.title}</td>
            <td style={{ width: "30%" }}>{book.author}</td>
            <td style={{ width: "20%" }}>{book.publisher}</td>
            <td className="text-end">{book.price - (book.price * book.disc / 100)}</td>
        </tr>
    )
}

function Books({ category, books }) {
    return (
        <>
            <h2>
                Category: {category}
                <hr />
            </h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Discounted Price</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, idx) => <DisplayBook key={idx} book={book} />)}
                </tbody>

            </table>
        </>
    );
}

export default function Catalog() {
    var books = {
        edu:
            [
                { title: "Java", author: "Herbert", publisher: "oracle", price: 2000, disc: 20 },
                { title: "JavaEE", author: "Schmidth", publisher: "oracle", price: 2500, disc: 10 }
            ],
        adventure:
            [
                { title: "Gulliver", author: "Aurthur", publisher: "travels", price: 1200, disc: 15 },
                { title: "Little giant", author: "Kim", publisher: "universal", price: 1500, disc: 25 }
            ]
    }

    return (
        <>
            {Object.keys(books).map(category =>
                <Books key={category} category={category} books={books[category]} />)}
        </>
    );
}