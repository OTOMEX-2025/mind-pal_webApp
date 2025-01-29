export default function Custom404() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-lg mt-4">Oops! The page you’re looking for doesn’t exist.</p>
        <a href="/" className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg">
          Go Back Home
        </a>
      </div>
    );
  }
  