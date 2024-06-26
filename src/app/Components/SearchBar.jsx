
'use client';
import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import BuildersData from '../Components/Data/BuildersList';
import { IoIosSearch } from "react-icons/io";
import { PiArrowElbowRightDownFill } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import Link from 'next/link';
import Image from 'next/image';
import defaultimage from './Photo/defaultimage.jpg'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [builders, setBuilders] = useState([]);
  const [search, setSearch] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;


  const handleSearchClick = () => {
    performSearch();
  };

  const performSearch = () => {
    setLoading(true);
    setSearchPerformed(true);
    setCurrentPage(1); // Reset current page to 1
    setTimeout(() => {
      if (search.trim() === '') {
        setBuilders([]);
      } else {
        const filteredBuilders = BuildersData.filter(
          (builder) => builder.city.toUpperCase().includes(search.toUpperCase())
        );
        setBuilders(filteredBuilders);
      }
      setLoading(false);
    }, 1500);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.trim() === '') {
      setSearchPerformed(false);
      setBuilders([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(builders.length / recordsPerPage);

  // Calculate the index of the first and last item to be displayed on the current page
  const indexOfLastBuilder = currentPage * recordsPerPage;
  const indexOfFirstBuilder = indexOfLastBuilder - recordsPerPage;
  const currentBuilders = builders.slice(indexOfFirstBuilder, indexOfLastBuilder);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 390); // Scroll to the top when currentPage changes
  }, [currentPage]);

  return (
    <>
      <div className="search-box">
        <p class="item-1">This is your last chance. After this, there is no turning back.</p>

        <p class="item-2">You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe.</p>

        <p class="item-3">You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes.</p>
      </div>
      <div className="container">

        <div className="searchbox2" >
          <h1 className='serach-heading'>Find exhibition stand builders</h1>

        </div>

        <div id="search-wrapper">

          <GrLocation className='search-icon' />

          <input id="search"
            placeholder="Enter a city name"
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button id="search-button" onClick={handleSearchClick}><IoIosSearch /></button>

        </div>


        {loading && <div className="loader-box"><span class="loader"></span></div>}
        {!loading && builders.length === 0 && searchPerformed && router.push('./request-city')}
      </div>

      <div className="container">
        <div className='StandBuilder'>
          {builders.length > 0 && <h4>Stand builders in {search}<PiArrowElbowRightDownFill /></h4>}
        </div>
        <div className="card-flex">
          {currentBuilders.map((value) => (
            <div className="builder-card" key={value.id}>
              <Image
                src={value.image ? value.image : defaultimage}
                alt={value.name}
                width={100} height={100}
              />
              <p className='card-content'>
                <b style={{ textTransform: "uppercase" }}>{value.name}</b>
                {value.description}
                <span className='rating'>{value.rating}</span>
                <Link href={value.link}>Visit Website</Link>
              </p>
            </div>
          ))}
        </div>
        {searchPerformed && builders.length > 0 && (
          <nav>  <hr />
            <ul className="pagination">
              <li className="page-item">
                <button onClick={prevPage} disabled={currentPage === 1} className="page-link">Previous</button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button onClick={() => paginate(index + 1)} className="page-link">
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="page-item">
                <button onClick={nextPage} disabled={currentPage === totalPages} className="page-link">Next</button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    
    </>
  );
};

export default SearchBar;