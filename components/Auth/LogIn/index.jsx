import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    // ✅ Redirect if already logged in
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            router.push('/dashboard');
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Login failed');
                return;
            }

            // ✅ Save user to localStorage
            localStorage.setItem('user', JSON.stringify(data.user));

            // ✅ Redirect to dashboard
            router.push('/dashboard');
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin} className="p-6 rounded-lg shadow-md">
                <input
                    type="email"
                    placeholder="Email"
                    className="border text-black p-2 w-full mb-4"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border text-black p-2 w-full mb-4"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
                >
                    Login
                </button>
            </form>
            <p className="mt-4 text-teaGreen">
                Don't have an account?{' '}
                <Link className="text-blue-500 cursor-pointer" href="/register" as=""> 
                    Register
                </Link>
            </p>
        </div>
    );
}
