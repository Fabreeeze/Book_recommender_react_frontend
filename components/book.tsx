"use client";

import React from 'react';

interface BookProps {
  book: {
    productURL: string;
    imgUrl: string;
    title: string;
    author: string;
    stars: number;
    price: string;
  };
}

const Book = ({ 
    book 
}: BookProps ) => (
  <div className="hover:-translate-y-10 book h-full w-full my-4 mx-2 border-8 bg-blue-100 border-green-200 p-4 rounded-lg shadow-md hover:shadow-2xl">
    <a href={book.productURL} target="_blank" rel="noopener noreferrer">
      <img src={`${book.imgUrl}.jpg`} alt={book.title} className=" flex w-full h-9/10 my-2" />
      <h2 className="text-s font-semibold text-gray-800">{book.title}</h2>
      <p className="text-gray-600">{book.author}</p>
      <div className="flex justify-between mt-2">
        <p className="text-gray-700">{book.stars} Stars</p>
        <p className="text-gray-700">{book.price}</p>
      </div>
    </a>
  </div>
);

export default Book;
