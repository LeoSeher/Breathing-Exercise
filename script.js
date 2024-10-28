// Elements
const totalPointsEl = document.getElementById('totalPoints');
const rankEl = document.getElementById('rank');
const streakDaysEl = document.getElementById('streakDays');

// Load saved data or set default values
let totalPoints = localStorage.getItem('totalPoints') ? parseInt(localStorage.getItem('totalPoints')) : 0;
let streakDays = localStorage.getItem('streakDays') ? parseInt(localStorage.getItem('streakDays')) : 0;

// Initialize display values on page load
updateUI();

// Add event listeners for points
document.getElementById('add2').addEventListener('click', () => addPoints(2));
document.getElementById('add5').addEventListener('click', () => addPoints(5));
document.getElementById('add10').addEventListener('click', () => addPoints(10));
document.getElementById('add20').addEventListener('click', () => addPoints(20));
document.getElementById('subtract1').addEventListener('click', () => addPoints(-1));

// Add event listeners for streak
document.getElementById('increaseStreak').addEventListener('click', () => changeStreak(1));
document.getElementById('decreaseStreak').addEventListener('click', () => changeStreak(-1));

// Function to add/subtract points and save to localStorage
function addPoints(points) {
    totalPoints += points;
    if (totalPoints < 0) totalPoints = 0;
    localStorage.setItem('totalPoints', totalPoints);
    updateUI();
}

// Function to increase/decrease streak and save to localStorage
function changeStreak(days) {
    streakDays += days;
    if (streakDays < 0) streakDays = 0;
    localStorage.setItem('streakDays', streakDays);
    updateUI();
}

// Function to update the rank based on total points
function updateRank() {
    let rank = 'Beginner';
    if (totalPoints >= 20000) rank = 'Grandmaster';
    else if (totalPoints >= 10000) rank = 'Master';
    else if (totalPoints >= 7000) rank = 'Expert';
    else if (totalPoints >= 5000) rank = 'Advanced';
    else if (totalPoints >= 3000) rank = 'Intermediate';
    else if (totalPoints >= 2000) rank = 'Advanced Beginner';
    rankEl.textContent = rank;
}

// Function to update the UI with the latest points and streak values
function updateUI() {
    totalPointsEl.textContent = totalPoints;
    streakDaysEl.textContent = streakDays;
    updateRank();
}
