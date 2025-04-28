import Link from 'next/link';



export default function Footer() {
  return (
    <footer className="bg-white border-t-black  border-t-2 mt-8">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
            FLASHVN
          </Link>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Mail</span>
              <a 
                href="mailto:technicalflashvn@gmail.com" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                technicalflashvn@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Phone</span>
              <a 
                href="tel:+84 939 249 127" 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                +84 939 249 127
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
