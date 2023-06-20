import Link from 'next/link';

const Navbar = () => {
  return (
    <div id='nav-bar' className="bg-gray-100 py-4">
      <div className="max-w-4xl mx-auto px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">PathFinder</h1>
        <ul className="flex justify-center space-x-4">
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
              <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Sign-Up</span>
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
    </div>
  );
};

export default Navbar;
