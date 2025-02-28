import React from 'react';

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 flex flex-col items-center p-5 bg-gray-800 bg-opacity-75 backdrop-blur-md text-white md:flex-row md:justify-between'>
      <h1 className='text-2xl font-bold mb-5 md:mb-0'>TarunCodes.tech</h1>
      <ul className='flex flex-row justify-between w-full md:w-auto md:space-x-5'>
        <li>
          <button className='px-4 py-2 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300'>
            Home
          </button>
        </li>
        <li>
          <button className='px-4 py-2 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300'>
            Projects
          </button>
        </li>
        <li>
          <button className='px-4 py-2 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300'>
            Contact Me
          </button>
        </li>
        <li>
          <button className='px-4 py-2 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300'>
            Skills
          </button>
        </li>
        <li>
          <button className='px-4 py-2 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300'>
            About
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;