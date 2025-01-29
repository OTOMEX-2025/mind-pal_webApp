import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

const filePath = path.join(process.cwd(), 'public', 'users.json');

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: 'User database not found' });
    }

    const users = JSON.parse(fs.readFileSync(filePath));

    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Exclude password from response
    const { password: _, ...userData } = user;

    return res.status(200).json({
        message: 'Login successful',
        user: userData
    });
}
