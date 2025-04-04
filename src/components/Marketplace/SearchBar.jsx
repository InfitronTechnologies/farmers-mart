import axios from 'axios';
import React, { useState } from 'react';
import { Search} from '@mui/icons-material'; // MUI Icons
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = ({ setSearchResults }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (!query.trim()) return; // Prevent empty search

    // Perform search logic here based on query
    const url = `${import.meta.env.VITE_API_BASE_URL}/product/search_product_post`

    setLoading(true);

    try {
      const response =  await axios.post(url, {
        product_name: query
      })
      if(response.data){
        // Filter products and update `setFilteredProducts`
        setSearchResults(response.data.data)
      }else{
        toast.error("Product not available!",  { 
          position: "top-right", // Customize position
          autoClose: 2000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setTimeout(() => {
          navigate("/marketplace")
        }, 2500)
      }
    } catch (error) {
      console.error('Search Error:', error)
    } finally{
      setLoading(false);
    }
    
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for produce..."
        className="w-full h-12 pl-5 pr-10 rounded-full text-gray-700 text-sm md:text-base shadow-md focus:ring-1 focus:ring-green-400 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="absolute right-4 top-2.5 text-green-700 cursor-pointer"
        disabled={loading}
      >
        <Search className={loading ? 'animate-spin' : ''} />
      </button>
    </div>
  );
};

export default SearchBar;