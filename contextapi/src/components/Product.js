import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Product = () => {

    const context = useContext(BooksContext)
    console.log(context)
    return (
        < div>
            <h2>
                <span> Kitap Listesi </span>
                <Link to="/cart"> Sepetim </Link>
            </h2>
            {
                context.bookList.map((book) => {
                    <div className='book' key={book.id}>
                        <img src={book.image} alt={book.name} />
                        <p>{book.name}</p>
                        <p>Yazar: {book.author}</p>
                        <p>Fiyat: {book.price}</p>
                        <button onClick={() => context.addToCart(book)}>Sepete Ekle </button>
                    </div>
                })
            }


        </div >
    );
};

export default Product          