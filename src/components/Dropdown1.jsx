import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleItemClick = (item) => {
        console.log(`Selected item: ${item}`);
    };

    return (
        <div 
            className="dropdown" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', display: 'inline-block' }}
        >
            <Link to={'/Kompaniya'} className="dropdown-toggle opacity-70 flex items-center justify-between">
              <span className='text-black font-normal xl:text-[16px] text-[13px] mr-3 hover:text-[#79c701] duration-300'>
              О компании
              </span>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 21 11"
            >
              <path d="M0 2.737L10.5 11 21 2.737 17.57 0 10.5 5.564 3.43 0z" fillRule="evenodd"></path>
            </svg>
            </Link>
          
            {isOpen && (
                <ul className="dropdown-menu" style={{
                    display: 'block',
                    position: 'absolute',
                    top: '100%',
                    left: -20,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                    zIndex: 1000,
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    width: '150px'
                }}>
                <li className='opacity-70 border-2 hover:text-[#63b700] transition-all duration-300' onClick={() => handleItemClick("Option 1")} style={{ padding: '12px 15px', cursor: 'pointer' }}>
                <Link
                          to={"/BizHaqimizda"}
                          className="text-[16px] text-[#a19f9f] font-medium hover:text-[#79c701]"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Отзывы о нас
                        </Link>
                </li>
                
                </ul>
            )}
        </div>
    );
};

export default Dropdown1;
