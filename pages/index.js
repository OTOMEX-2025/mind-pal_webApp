import Image from "next/image";
import Link from "next/link";
// import logo from "/MindPalLogo"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">
        Welcome
      </span>

      <div className="my-8">
        <Image src="/MindPalLogo.png" alt="MindPal Logo" width={120} height={120} />
        <h1 className="text-3xl font-bold mt-4">
          <span className="text-blue-600">Mind</span>Pal
        </h1>
      </div>

      <p className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm">
        Your Mental Health, Our Priority
      </p>

      <div className="mt-6 space-x-4">
        <Link href="/login">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">
            Get Started
          </button>
        </Link>
        
        <Link href="register">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
            Don't have an account? Register
          </button>
        </Link>
      </div>
    </div>
  );
}
