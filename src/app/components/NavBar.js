'use client'


import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="nav-bar" className="bg-gray-100 py-4">
      <div className="max-w-4xl mx-auto px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">PathFinder</h1>
        <button
          type="button"
          className="text-blue-500 hover:text-blue-700 focus:outline-none sm:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 18H18V16H6V18ZM6 13H18V11H6V13ZM6 6V8H18V6H6Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
              />
            )}
          </svg>
        </button>
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex sm:justify-center sm:space-x-4`}
        >
          <li>
            <Link href="/">
              <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/paths">
              <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Paths</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-blue-500 hover:text-blue-700 cursor-pointer">About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Contact</span>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Sign Up</span>
            </Link>
          </li>
          <li>
            <Link href="/signin">
              <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Sign In</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-blue-600 h-1"></div>

      <style jsx>{`
        #nav-bar {
          position: sticky;
          top: 0;
          z-index: 100;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        ul li {
          display: block;
        }

        ul li span {
          cursor: pointer;
        }

        @media (min-width: 640px) {
          ul {
            display: flex;
          }

          ul li {
            display: inline-block;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;