import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTrophy, faUser, faInfoCircle, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {  NavLink } from 'react-router-dom';
import useLogout from '../hooks/useLogout';

const BottomNavBar = () => {
  const { logout } = useLogout()
  return (
    <nav className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2">
      <div className="container  flex justify-around items-center mt-[20px]">
        
          <NavLink to={"/home"} className=' text-gray-600 hover:text-blue-600'>
          <FontAwesomeIcon icon={faHome} className='text-[1.25rem]'  />
          {/* <span className="block text-xs">Home</span> */}
          </NavLink>
          <NavLink to={"/leaderboard"} className=' text-gray-600 hover:text-blue-600'>
          <FontAwesomeIcon icon={faTrophy}className='text-[1.25rem]'   />
          {/* <span className="block text-xs">Leaderboard</span> */}
          </NavLink>
          <NavLink to={"/about"} className='text-gray-600 hover:text-blue-600'>
            <FontAwesomeIcon icon={faInfoCircle} className='text-[1.25rem]' />
          </NavLink>
          <div className='text-gray-600 hover:text-blue-600' onClick={logout}>
            <FontAwesomeIcon icon={faRightFromBracket} className='text-[1.25rem]' />
          </div>
          {/* <span className="block text-xs">About</span> */}
      </div>
    </nav>
  );
};

export default BottomNavBar;
