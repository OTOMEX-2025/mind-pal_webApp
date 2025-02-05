import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export default function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // ✅ Check if user is logged in
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            router.push('/login'); // Redirect to login if not found
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* <Sidebar/> */}
            <h2 className="text-2xl font-bold mb-4">Welcome, {user?.name}!</h2>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
                Logout
            </button>
        </div>
    );
}
