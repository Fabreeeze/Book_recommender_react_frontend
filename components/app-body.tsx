"use client";

import React from 'react';
import Header from '../components/header';
import SearchForm from '../components/search-form';
import BookList from '../components/book-list';

interface Book {
  productURL: string;
  imgUrl: string;
  title: string;
  author: string;
  stars: number;
  price: string;
  category_name: string;
}

const AppBody = () => {
  const [books, setBooks] = React.useState<Book[]>([]);
  const [genre, setGenre] = React.useState('');

  const handleSearch = async (formData: any) => {
    setGenre(formData.genre);
    try {
      const response = await fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='bg-zinc-200'>
        <div className='bg-zinc-700'>
            <Header />
        </div>
        <div className='flex items-center mx-auto justify-center bg-zinc-500'>
            <SearchForm onSearch={handleSearch} />
        </div>
        <BookList books={books} genre={genre} />
    </div>
  );
};

export default AppBody;
