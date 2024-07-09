"use client";

import React from 'react';
import Book from './book';

interface BookListProps {
  books: {
    productURL: string;
    imgUrl: string;
    title: string;
    author: string;
    stars: number;
    price: string;
    category_name: string;
  }[];
  genre: string;
}

const BookList= ({ 
    books, 
    genre, 
} : BookListProps ) => {
  const sameGenreBooks = books.filter(book => book.category_name === genre);
  const otherGenreBooks = books.filter(book => book.category_name !== genre);

  return (
    <div className="container w-full h-full p-8 mt-4">
      {sameGenreBooks.length > 0 && (
        <>
          <h2 className="book-heading col-span-4 text-blue-500 text-5xl">Recommended books</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-stretch gap-10'>
            {sameGenreBooks.map((book, index) => (
                <Book key={index} book={book} />
            
            ))}

          </div>
        </>
      )}
      <br></br>
      {sameGenreBooks.length > 0 && otherGenreBooks.length > 0 && (
        <hr className="separator col-span-5" />
      )}
      {otherGenreBooks.length > 0 && (
        <>
          <h2 className="book-heading col-span-4 text-blue-500 text-5xl">Other genre recommendations</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5   justify-items-stretch  gap-10'>
            {otherGenreBooks.map((book, index) => (
                <Book key={index} book={book} />
            ))}

          </div>
        </>
      )}
    </div>
  );
};

export default BookList;
