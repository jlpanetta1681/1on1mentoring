import React from 'react';

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-lg mb-8">
          This area is still under construction.
          <br />
          We apologize for any inconvenience and hope you will check back soon for the latest Pathfinders updates!
        </p>
        <img src="/construction-image.png" alt="Under Construction" className="mx-auto mb-8" />
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default Page;