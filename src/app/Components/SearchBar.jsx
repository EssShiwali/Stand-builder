
'use client';
import React, { useState, useRef } from 'react';
import './SearchBar.css';
import BuildersData from '../Components/Data/BuildersList';
import { IoIosSearch } from "react-icons/io";
import { PiArrowElbowRightDownFill } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import Link from 'next/link';
import Image from 'next/image';
import defaultimage from './Photo/defaultimage.jpg'
import { useRouter } from 'next/navigation';
import { AutoComplete } from 'antd';

const allOptions = [
  { value: 'Anaheim' },
  { value: 'Atlantia' },
  { value: 'Austin' },
  { value: 'Boston' },
  { value: 'Chicago' },
  { value: 'Dallas' },
  { value: 'Denver' },
  { value: 'Detroit' },
  { value: 'Hollywood' },
  { value: 'HOUSTON' },
  { value: 'Las vegas' },
  { value: 'Long beach' },
  { value: 'Los angelas' },
  { value: 'Louisville' },
  { value: 'Miami' },
  { value: 'Ney york' },
  { value: 'Orlando' },
  { value: 'Palm beach' },
  { value: 'Pittsburgh' },
  { value: 'San Antonio' },
  { value: 'San Diego' },
  { value: 'San Fransisco' },
  { value: 'San Jose' },
  { value: 'Texas' },
  { value: 'Washington DC' },
  { value: 'New Orleans' },
  { value: 'Utah' },
  { value: 'Michigan' },
  { value: 'Alaska' },
  { value: 'Georgia' },
  { value: 'Bologna' },
  { value: 'Florence' },
  { value: 'Genoa' },
  { value: 'Milan' },
  { value: 'Parma' },
  { value: 'Rimni' },
  { value: 'Rome' },
  { value: 'Vernona' },
  { value: 'Dubai' },
  { value: 'Abu Dhabi' },
  { value: 'Sharjah' },
  { value: 'Frankfurt' },
  { value: 'Stuttgart' },
  { value: 'Berlin' },
  { value: 'Bonn' },
  { value: 'Cologne' },
  { value: 'Dortmund' },
  { value: 'Dusseldorf' },
  { value: 'essen' },
  { value: 'Friedrichshafen' },
  { value: 'Hamburg' },
  { value: 'Hannover' },
  { value: 'Karlsruhe' },
  { value: 'Leipzig' },
  { value: 'Munich' },
  { value: 'Nuremberg' },
  { value: 'Cannes' },
  { value: 'Lyon' },
  { value: 'Nice' },
  { value: 'Paris' },
  { value: 'Strasbourg' },
  { value: 'Verona' },
  { value: 'Bern' },
  { value: 'Geneva' },
  { value: 'Lugano' },
  { value: 'Zurich' },
  { value: 'Basel' },
  { value: 'Sirnach' },
  { value: 'Amsterdam' },
  { value: 'Maastricht' },
  { value: 'Rotterdam' },
  { value: 'Utrecht' },
  { value: 'Vijfhuizen' },
  { value: 'Alicante' },
  { value: 'Barcelona' },
  { value: 'Bilbao' },
  { value: 'Jaen' },
  { value: 'Madrid' },
  { value: 'Malaga' },
  { value: 'Palma de mallorca' },
  { value: 'Seville' },
  { value: 'Valencia' },
  { value: 'Valladolid' },
  { value: 'Vigo' },
  { value: 'Zaragoza' },
  { value: 'Brussels' },
  { value: 'Kortrijk' },
  { value: 'Jakarta' },
  { value: 'Belo horizonte' },
  { value: 'Brasilia' },
  { value: 'Campinas' },
  { value: 'Caxias do sul' },
  { value: 'Curitiba' },
  { value: 'Florianopolis' },
  { value: 'Fortaleza' },
  { value: 'Goiania' },
  { value: 'Joinville' },
  { value: 'Recife' },
  { value: 'Rio de janerio' },
  { value: 'Salvador' },
  { value: 'Sao paulo' },
  { value: 'Ribeirao preto' },
  { value: 'Ahemdabad' },
  { value: 'Bangalore' },
  { value: 'Mumbai' },
  { value: 'New Delhi' },
  { value: 'Moscow' },
  { value: 'St Petersburg' },
  { value: 'Singapore' },
  { value: 'Seoul' },
  { value: 'Tehran' },
  { value: 'Kuwait City' },
  { value: 'Doha' },
  { value: 'Jeddah' },
  { value: 'Riyadh' },
  { value: 'Istanbul' },
  { value: 'Melbourne' },
  { value: 'Sydney' },
  { value: 'Montreal' },
  { value: 'Toronto' },
  { value: 'Vancouver' },
  { value: 'Bangkok' },
  { value: 'Khon Kaen' },
];

const SearchBar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [builders, setBuilders] = useState([]);
  const [search, setSearch] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const searchResultRef = useRef(null);
  const [options, setOptions] = useState([]);

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

  const handleInputChange = (value) => {
    setSearch(value);
    if (value.trim() === '') {
      setSearchPerformed(false);
      setBuilders([]);
      setOptions([]);
    } else {
      setOptions(allOptions.filter(option =>
        option.value.toUpperCase().includes(value.toUpperCase())
      ));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  const handleSelect = (value) => {
    setSearch(value);
    performSearch();
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(builders.length / recordsPerPage);

  // Calculate the index of the first and last item to be displayed on the current page
  const indexOfLastBuilder = currentPage * recordsPerPage;
  const indexOfFirstBuilder = indexOfLastBuilder - recordsPerPage;
  const currentBuilders = builders.slice(indexOfFirstBuilder, indexOfLastBuilder);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    searchResultRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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

  return (
    <>
      <div className="search-box">
      </div>
      <div className="container">
        <div className="searchbox2">
          <h1 className='serach-heading'>Find exhibition stand builders</h1>
        </div>
        <div id="search-wrapper" ref={searchResultRef}>
          <GrLocation className='search-icon' />
          <AutoComplete
            className='searchinput'
            options={options}
            value={search}
            onChange={handleInputChange}
            onSelect={handleSelect}
            placeholder="Enter a city name"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().includes(inputValue.toUpperCase())
            }
            onKeyDown={handleKeyDown}
          />
          <button id="search-button" onClick={handleSearchClick}><IoIosSearch /></button>
        </div>
        {loading && <div className="loader-box"><span className="loader"></span></div>}
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
          <nav>
            <hr />
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
