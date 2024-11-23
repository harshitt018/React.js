import express from 'express';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import { fileURLToPath } from 'url';


const app = express();
const PORT = 3001;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json());

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the users JSON file
const usersFilePath = path.join(__dirname, 'users.json');

// Utility function to read users from the JSON file
const readUsersFromFile = () => {
    try {
        if (!fs.existsSync(usersFilePath)) {
            fs.writeFileSync(usersFilePath, JSON.stringify([]), { flag: 'wx' }); // Create file if it doesn't exist
        }
        const data = fs.readFileSync(usersFilePath);
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading users file:", error);
        return [];
    }
};

// Utility function to write users to the JSON file
const writeUsersToFile = (users) => {
    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing to users file:", error);
    }
};

// Route for user signup
app.post('/Signup', async (req, res) => {
    const { email, password } = req.body;
    const users = readUsersFromFile();

    // Check if the email already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add the new user
    users.push({ email, password: hashedPassword });
    writeUsersToFile(users);

    res.status(201).json({ message: 'Signup successful' });
});

// Route for user login
app.post('/Login', async (req, res) => {
    const { email, password } = req.body;
    const users = readUsersFromFile();

    // Find the user by email
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    // Compare the hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        return res.status(400).json({ message: 'Incorrect password' });
    }

    res.status(200).json({ message: 'Login successful' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
