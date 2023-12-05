const express = require('express');
const cors = require('cors');
const fs = require('fs'); // File System for reading/writing JSON files

const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json

// Placeholder for in-memory storage (you might replace this with a real database or JSON file)
let users = []; // Array to store users
let reservations = []; // Array to store reservations

// Define your API routes here

// Add a new user
app.post('/api/users', (req, res) => {
    const newUser = req.body.username;
    // TODO: Add logic to add the new user to 'users' array or data store
    // Check if user already exists, handle accordingly
    users.push(newUser); // Example logic
    res.status(200).send('User added');
});

// Retrieve a user's reservation
app.get('/api/reservations/:username', (req, res) => {
    const username = req.params.username;
    // TODO: Add logic to find and return the reservation for the given user
    const userReservation = reservations.find(r => r.username === username); // Example logic
    res.status(200).json(userReservation || {});
});

// Get all reservations
app.get('/api/reservations', (req, res) => {
    // TODO: Add logic to return all reservations
    res.status(200).json(reservations); // Example logic
});

// Create a new reservation
app.post('/api/reservations', (req, res) => {
    const newReservation = req.body;
    // TODO: Add logic to add the new reservation to 'reservations' array or data store
    reservations.push(newReservation); // Example logic
    res.status(201).send('Reservation created');
});

// Update a reservation
app.put('/api/reservations/:username', (req, res) => {
    const username = req.params.username;
    const updatedReservation = req.body;
    // TODO: Add logic to update the reservation for the given user
    // Find reservation by username and update it
    res.status(200).send('Reservation updated');
});

// Delete a reservation
app.delete('/api/reservations/:username', (req, res) => {
    const username = req.params.username;
    // TODO: Add logic to delete the reservation for the given user
    // Find reservation by username and remove it
    res.status(200).send('Reservation deleted');
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
