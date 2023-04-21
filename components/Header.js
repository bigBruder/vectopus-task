import "tailwindcss/tailwind.css";
import { GoogleFonts } from "next-google-fonts";

export const Header = () => {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" />
      <header className="bg-white pr-10 pl-10 pt-5 pb-5 sticky top-0 left-0" style={{zIndex: 3}}>
        <nav className="container mx-auto flex justify-between items-center">
          <img className="h-16 w-40 mr-5" src="https://beta.vectopus.com/images/vectopus-logo.svg" alt="Logo" />
          <ul className="flex">
            <li className="mr-6 inline-flex items-center space-x-2" >
               <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
              <span className="text-black hover:text-gray-400 font-poppins" href="#">
                Search
              </span>
            </li>
            <li className="mr-6 inline-flex items-center space-x-2">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M3.75 2A1.75 1.75 0 002 3.75v3.5C2 8.216 2.784 9 3.75 9h3.5A1.75 1.75 0 009 7.25v-3.5A1.75 1.75 0 007.25 2h-3.5zM3.5 3.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zM3.75 11A1.75 1.75 0 002 12.75v3.5c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 009 16.25v-3.5A1.75 1.75 0 007.25 11h-3.5zm-.25 1.75a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zm7.5-9c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0116.25 9h-3.5A1.75 1.75 0 0111 7.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm-7.26 1a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V5.5a1 1 0 00-1-1h-.01zm-9 9a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm9 0a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1v-.01a1 1 0 00-1-1h-.01zm-3.5-1.5a1 1 0 011-1H12a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V12zm6-1a1 1 0 00-1 1v.01a1 1 0 001 1H17a1 1 0 001-1V12a1 1 0 00-1-1h-.01zm-1 6a1 1 0 011-1H17a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V17zm-4-1a1 1 0 00-1 1v.01a1 1 0 001 1H12a1 1 0 001-1V17a1 1 0 00-1-1h-.01z"></path>
              </svg>
              <span className="text-black hover:text-gray-400 font-poppins" href="#">
                Assets Library
              </span>
            </li>
            <li className="mr-6 inline-flex items-center space-x-2">
              <span className="text-black hover:text-gray-400 font-poppins" href="#">
                Custom design
              </span>
            </li>
            <li className="mr-6 inline-flex items-center space-x-2">
              <span className="text-black hover:text-gray-400 font-poppins" href="#">
                Updates
              </span>
            </li>
            <li className="mr-6 inline-flex items-center space-x-2">
              <button className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Sing In
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
