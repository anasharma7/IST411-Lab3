// Function to add a new user
function addUser() {
    const username = document.getElementById('usernameInput').value;
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('User added successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error adding user');
    });
}

// Function to create a reservation
function createReservation() {
    const username = document.getElementById('reservationUserInput').value;
    const date = document.getElementById('reservationDateInput').value;
    const time = document.getElementById('reservationTimeInput').value;
    const duration = document.getElementById('reservationDurationInput').value;

    fetch('/api/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            date: date,
            time: time,
            duration: duration
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Reservation created successfully');
        fetchAllReservations(); // Update the list of reservations
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error creating reservation');
    });
}

// Function to fetch all reservations
function fetchAllReservations() {
    fetch('/api/reservations')
    .then(response => response.json())
    .then(data => {
        const displayDiv = document.getElementById('reservationsDisplay');
        const reservationsList = data.map(reservation => 
            `<p>Username: ${reservation.username}, Date: ${reservation.date}, Time: ${reservation.time}, Duration: ${reservation.duration} hours</p>`
        ).join('');
        displayDiv.innerHTML = '<h3>Reservations:</h3>' + reservationsList;
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error fetching reservations');
    });
}

// Add event listeners to buttons
document.getElementById('addUserButton').addEventListener('click', addUser);
document.getElementById('createReservationButton').addEventListener('click', createReservation);
document.getElementById('fetchAllReservationsButton').addEventListener('click', fetchAllReservations);
