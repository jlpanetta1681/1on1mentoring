import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Success</h1>
      <p className="text-lg mt-4">Your message has been sent successfully.</p>
      <Link href="/">
         <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Go to Home Page</span>
      </Link>
    </div>
  );
};

export default SuccessPage;
