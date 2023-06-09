import Link from 'next/link';

const Navbar = () => {
  return (
    <div id='main-cont' className="bg-gray-100 py-4 content-center">
      <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-3xl font-bold text-gray-800">PathFinder</h1>
        <div className="flex justify-between items-center mb-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/">
                <button className="text-gray-700 hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-transform duration-300 border border-transparent hover:border-blue-600 rounded-md px-4 py-2">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <button className="text-gray-700 hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-transform duration-300 border border-transparent hover:border-blue-600 rounded-md px-4 py-2">
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link href="/paths">
                <button className="text-gray-700 hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-transform duration-300 border border-transparent hover:border-blue-600 rounded-md px-4 py-2">
                  Paths
                </button>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <button className="text-gray-700 hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-transform duration-300 border border-transparent hover:border-blue-600 rounded-md px-4 py-2">
                  SignUp
                </button>
              </Link>
            </li>
            <li>
              <Link href="/signin">
                <button className="text-gray-700 hover:text-blue-600 cursor-pointer transform hover:scale-110 transition-transform duration-300 border border-transparent hover:border-blue-600 rounded-md px-4 py-2">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-blue-600 h-1"></div>
      </div>
    </div>
  );
};

export default Navbar;
