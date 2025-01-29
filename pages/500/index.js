export default function Custom500() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold">500</h1>
        <p className="text-lg mt-4">Something went wrong on our end.</p>
        <a href="/" className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg">
          Go Back Home
        </a>
      </div>
    );
  }
  