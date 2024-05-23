import React, { useState } from 'react';
import './DropdownMenu.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GoPlus } from "react-icons/go";
import Link from 'next/link';

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleMainClick = () => {
    setOpen(!open);
    setSubMenuOpen(false);
    setActiveSubMenu(null);
  };

  const handleSubmenuClick = (index) => {
    setSubMenuOpen(!subMenuOpen);
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <div className='dropdown-container'>
      <div
        className={`dropdown-trigger ${open ? 'open' : ''}`}
        onClick={handleMainClick}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        EXHIBITION STAND WORLDWIDE <MdOutlineKeyboardArrowDown className={`rotate1 ${open ? 'rotate' : ''}`} />
      </div>
      <div
        className={`dropdown-menu ${open ? 'open' : ''}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <ul className='dropdownlist'>
          <li className="dropdown-item" onClick={() => handleSubmenuClick(0)}>
            <Link href="#">United States<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 0 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">Anaheim</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Atlanta</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Austin</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Boston</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Chicago</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Dallas</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Denver</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Detroit</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Hollywood</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Houston</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Las vegas</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Long beach</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Los Angeles</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Louisville</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">miami</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">new york</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">orlando</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">palm beach</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">pittsburgh</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">san antonio</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">san diego</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">san francisco</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">san jose</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">texas</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Los Angeles</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Louis ville</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">miami</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">New york</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">orlando</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">palm beach</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">pittsburgh</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">san antonio</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">san diego</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">san fransico</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">san jose</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">texas</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">washington dc</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">new orleans</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">utah</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">michigan</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">alaska</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">georgia</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="dropdown-item" onClick={() => handleSubmenuClick(1)}>
            <Link href="#">United Kingdom <GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 1 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">London</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">birmingham</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">manchester</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="dropdown-item" onClick={() => handleSubmenuClick(2)}>
            <Link href="#">uae<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 2 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">Dubai</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">Abu dhabi</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">sharjah</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="dropdown-item" onClick={() => handleSubmenuClick(3)}>
            <Link href="#">Germany<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 3 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">frankfurt</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">sttutgart</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">berlin</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">bonn</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">cologne</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">dortmund</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">dusseldorf</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">essen</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">friedrichshafen</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">hamburg</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">hannover</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">karlsruhe</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">leipzig</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">munich</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">nuremberg</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(4)}>
            <Link href="#">France<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 4 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">cannes</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">lyon</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">nice</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">paris</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">strasbourg</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(5)}>
            <Link href="#">Italy<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 5 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">bologna</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">florence</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">genoa</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">milan</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">parma</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">rimni</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">rome</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">verona</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(6)}>
            <Link href="#">Switzerland<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 6 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">bern</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">geneva</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">lugano</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">zurich</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">basel</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">sirnach</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(7)}>
            <Link href="#">Netherlands<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 7 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">amsterdam</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">maastricht</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">rotterdam</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">utrecht</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">vijfhuizen</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(8)}>
            <Link href="#">Spain<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 8 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">alicante</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">barcelona</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">bilbao</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">jaen</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">madrid</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">malaga</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">palma de mallorca</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">seville</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">valencia</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">valladolid</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">vigo</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">zaragoza</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(9)}>
            <Link href="#">Belgium<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 9 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">brussels</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">kortrijk</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(10)}>
            <Link href="#">Indonesia<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 10 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">jakarta</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(11)}>
            <Link href="#">Brazil<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 11 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">belo horizonte</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">brasilia</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">campinas</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">caxias do sul</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">curitiba</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">florianopolis</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">fortaleza</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">goiania</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">joinville</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">recife</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">rio de janerio</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">salvador</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">sao paulo</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">ribeirao preto</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(12)}>
            <Link href="#">India<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 12 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">ahemdabad</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">bangalore</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">mumbai</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">new delhi</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>


          <li className="dropdown-item" onClick={() => handleSubmenuClick(13)}>
            <Link href="#">Russia<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 13 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">moscow</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">st petersburg</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>


          <li className="dropdown-item" onClick={() => handleSubmenuClick(14)}>
            <Link href="#">Singapore<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 14 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">singapore</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>


          <li className="dropdown-item" onClick={() => handleSubmenuClick(15)}>
            <Link href="#">South Korea<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 15 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">seoul</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>


          <li className="dropdown-item" onClick={() => handleSubmenuClick(16)}>
            <Link href="#">Iran<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 16 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">tehran</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(17)}>
            <Link href="#">Kuwait<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 17 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">kuwait city</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(18)}>
            <Link href="#">Qatar<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 18 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">doha</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(19)}>
            <Link href="#">Saudi Arabia<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 19 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">jeddah</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">riyadh</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(20)}>
            <Link href="#">Turkey<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 20 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">istanbul</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(21)}>
            <Link href="#">Australia<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 21 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">melbourne</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">sydney</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(22)}>
            <Link href="#">Canada<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 22 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">montreal</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">toronto</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">vancouver</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="dropdown-item" onClick={() => handleSubmenuClick(23)}>
            <Link href="#">THAILAND<GoPlus /></Link>
            {subMenuOpen && activeSubMenu === 23 && (
              <div className="submenu">
                <ul className='submenu-ul'>
                  <li className="submenu-item">
                    <Link href="#">bangkok</Link>
                  </li>
                  <li className="submenu-item">
                    <Link href="#">khon kaen</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
