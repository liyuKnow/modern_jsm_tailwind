import React, {useState} from 'react';
import { close, logo, menu} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {
          navLinks?.map((nav,index) => (
            <li
              key={index}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))
        }
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={ toggle ? close : menu} 
          alt="" 
          className='w-[24px] h-[24px] object-contain'
          onClick={ ()=> setToggle((prev) => (!prev))}
        />
          <div
            className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className='w-full list-none flex flex-col justify-end items-center text-center flex-1'>
              {
                navLinks?.map((nav,index) => (
                  <li
                    key={index}
                    className={`w-full font-poppins font-normal cursor-pointer text-[16px] text-white p-2  hover:bg-gray-600`}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar