

import React from 'react';

export default function NavLinks({currentPage, setCurrentPage}) {


  return (
    <nav class="bg-none opacity-1 border-gray-200 grid place-content-center dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap grid place-content-center  justify-between mx-auto p-4">
        
    
        <div  >
          <ul class="font-medium  flex flex-col p-4 md:p-0 mt-4 border border-800 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#home"  onClick={() => setCurrentPage('Home')}
          className={currentPage === 'Home'  ? 'nav-link active' : 'nav-link'} class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 active:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#about" onClick={() =>setCurrentPage('About')}
          className={currentPage === 'About'  ? 'nav-link active' : 'nav-link'} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent active:text-blue-500">About</a>
            </li>
            <li>
              <a href="#projects"  onClick={() => setCurrentPage('Projects')}
          className={currentPage === 'Projects'  ? 'nav-link active' : 'nav-link'} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent active:text-blue-500">Projects</a>
            </li>
            <li>
              <a href="#resume"  onClick={() =>setCurrentPage('Resume')}
          className={currentPage === 'Resume'  ? 'nav-link active' : 'nav-link'} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent active:text-blue-500">Resume</a>
            </li>
            <li>
              <a href="#contact"  onClick={() =>setCurrentPage('Contact')}
          className={currentPage === 'Contact'  ? 'nav-link active' : 'nav-link'} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
    
    
  );
}