import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isProfessional, setIsProfessional] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, isProfessional })
        });
        const data = await response.json();
        if (response.ok) {
            setMessage('Registration successful! Redirecting to login...');
            setTimeout(() => router.push('/login'), 2000);
        } else {
            setMessage(data.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form onSubmit={handleRegister} className="p-6 rounded-lg shadow-md">
                <input type="text" placeholder="Name" className="border text-black p-2 w-full mb-4" value={name} onChange={e => setName(e.target.value)} required />
                <input type="email" placeholder="Email" className="border text-black p-2 w-full mb-4" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" className="border text-black p-2 w-full mb-4" value={password} onChange={e => setPassword(e.target.value)} required />

                {message && <p className="text-green-500 mb-4">{message}</p>}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-4">Register</button>
            </form>
        </div>
    );
}
