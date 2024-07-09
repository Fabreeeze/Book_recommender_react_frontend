"use client";

import React, { useState } from 'react';

interface SearchFormProps {
  onSearch: (formData: any) => void;
}

const SearchForm = ({
    onSearch 
}: SearchFormProps ) => {
  const [formData, setFormData] = useState({
    genre: '',
    keywords: '',
    cost: '',
    stars: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <div className='flex '>

      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <div className='flex flex-row '>

          <div>
            <label htmlFor="genre" className="block text-gray-900 font-semibold  h-6">Select Genre:</label>
            <select id="genre" name="genre" className="form-select mt-1 block flex-1 h-8 w-[188px] border-2 hover:border-4 border-blue-300  text-zinc-700" onChange={handleChange}>
                <option className="text-xs text-zinc-500" value="Parenting & Relationships">Parenting & Relationships</option>
                <option className="text-xs text-zinc-500" value="Engineering & Transportation">Engineering & Transportation</option>
                <option className="text-xs text-zinc-500" value="Science & Math">Science & Math</option>
                <option className="text-xs text-zinc-500" value="Mystery, Thriller & Suspense">Mystery, Thriller & Suspense</option>
                <option className="text-xs text-zinc-500" value="Crafts, Hobbies & Home">Crafts, Hobbies & Home</option>
                <option className="text-xs text-zinc-500" value="Literature & Fiction">Literature & Fiction</option>
                <option className="text-xs text-zinc-500" value="Biographies & Memoirs">Biographies & Memoirs</option>
                <option className="text-xs text-zinc-500" value="Computers & Technology">Computers & Technology</option>
                <option className="text-xs text-zinc-500" value="Politics & Social Sciences">Politics & Social Sciences</option>
                <option className="text-xs text-zinc-500" value="Teen & Young Adult">Teen & Young Adult</option>
                <option className="text-xs text-zinc-500" value="Foreign Language">Foreign Language</option>
                <option className="text-xs text-zinc-500" value="Science Fiction & Fantasy">Science Fiction & Fantasy</option>
                <option className="text-xs text-zinc-500" value="Travel">Travel</option>
                <option className="text-xs text-zinc-500" value="LGBTQ+ eBooks">LGBTQ+ eBooks</option>
                <option className="text-xs text-zinc-500" value="Religion & Spirituality">Religion & Spirituality</option>
                <option className="text-xs text-zinc-500" value="Arts & Photo graphy">Arts & Photo graphy</option>
                <option className="text-xs text-zinc-500" value="Comics">Comics</option>
                <option className="text-xs text-zinc-500" value="Education & Teaching">Education & Teaching</option>
                <option className="text-xs text-zinc-500" value="History">History</option>
                <option className="text-xs text-zinc-500" value="Cookbooks, Food & Wine">Cookbooks, Food & Wine</option>
                <option className="text-xs text-zinc-500" value="Nonfiction">Nonfiction</option>
                <option className="text-xs text-zinc-500" value="Self-Help">Self-Help</option>
                <option className="text-xs text-zinc-500" value="Romance">Romance</option>
                <option className="text-xs text-zinc-500" value="Humor & Entertainment">Humor & Entertainment</option>
                <option className="text-xs text-zinc-500" value="Reference">Reference</option>
                <option className="text-xs text-zinc-500" value="Health, Fitness & Dieting">Health, Fitness & Dieting</option>
                <option className="text-xs text-zinc-500" value="Sports & Outdoors">Sports & Outdoors</option>
                <option className="text-xs text-zinc-500" value="Medical">Medical</option>
                <option className="text-xs text-zinc-500" value="Business & Money">Business & Money</option>
                <option className="text-xs text-zinc-500" value="Law">Law</option>
                <option className="text-xs text-zinc-500" value="Children's eBooks">Children's eBooks</option>
            </select>
          </div>


          <div>
            <label htmlFor="keywords" className="block  text-gray-900 font-semibold w-2/3 h-6">Enter Keywords:</label>
            <input type="text" id="keywords" name="keywords" className=" text-zinc-500 form-input mt-1 block flex-1 border-2 h-8  hover:border-4 border-blue-300" placeholder="Keywords" onChange={handleChange} />
          </div>
        </div>
        <div className='flex flex-row flex-1'>
          <div className='w-1/2'>
            <label htmlFor="cost" className="block text-gray-900 font-semibold w-1/2 h-6">Cost Cap:</label>
            <input type="number" id="cost" name="cost" className="text-zinc-500 form-input mt-1 block w-full border-2 h-8 hover:border-4 border-blue-300" placeholder="Cost" onChange={handleChange} />
          </div>
          <div className='w-1/2'>
            <label htmlFor="stars" className="block text-gray-900 font-semibold w-1/2 h-6">Stars Cap:</label>
            <input type="number" id="stars" name="stars" className="text-zinc-500 form-input mt-1 block w-full border-2 h-8 hover:border-4 border-blue-300" placeholder="Stars" onChange={handleChange} />
          </div>
        </div>
        <div className='flex items-center border-blue-700 border-2 justify-center'>
          <button type="submit" className="bg-blue-500 flex flex-1 items-center text-2xl justify-center text-white px-4 py-2 rounded-md hover:bg-blue-600">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
