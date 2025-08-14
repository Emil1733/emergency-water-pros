import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-6">
              The page you're looking for doesn't exist or may have been moved.
            </p>
            
            <div className="space-y-4">
              <Link 
                href="/"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Go Home
              </Link>
              
              <div className="text-center">
                <p className="text-sm text-gray-600">For emergency service:</p>
                <a 
                  href="tel:+1-800-WATER-911"
                  className="inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <span className="mr-2">📞</span>
                  Call (800) WATER-911
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}