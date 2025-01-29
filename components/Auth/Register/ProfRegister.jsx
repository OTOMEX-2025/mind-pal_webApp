import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ProfessionalRegistration() {
    const [fullName, setFullName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [certification, setCertification] = useState(null);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleFileChange = (e) => {
        setCertification(e.target.files[0]);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        // Form validation (check if all fields are filled)
        if (!fullName || !idNumber || !phoneNumber || !email || !password || !yearsOfExperience || !certification) {
            setError('All fields are required');
            return;
        }

        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('idNumber', idNumber);
        formData.append('phoneNumber', phoneNumber);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('yearsOfExperience', yearsOfExperience);
        formData.append('certification', certification);

        try {
            const response = await fetch('/api/professional-register', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Registration failed');
                return;
            }

            // Redirect after successful registration
            router.push('/login');
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Professional Registration</h2>
            <form onSubmit={handleRegister} className="p-6 rounded-lg shadow-md w-full max-w-md">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="border text-black p-2 w-full mb-4"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="ID Number"
                    className="border text-black p-2 w-full mb-4"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="border text-black p-2 w-full mb-4"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border text-black p-2 w-full mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border text-black p-2 w-full mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Years of Experience"
                    className="border text-black p-2 w-full mb-4"
                    value={yearsOfExperience}
                    onChange={(e) => setYearsOfExperience(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="border p-2 w-full mb-4"
                    required
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
