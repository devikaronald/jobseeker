// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Form Handling
const jobseekerForm = document.getElementById('jobseekerForm');

if (jobseekerForm) {
    jobseekerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            skillSector: document.getElementById('skillSector').value,
            location: document.getElementById('location').value,
            experience: document.getElementById('experience').value
        };

        // For demonstration, just log the data
        console.log('Form submitted:', formData);
        alert('Registration successful!');
        jobseekerForm.reset();
    });
}

// Search Functionality
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const skill = document.querySelector('.search-input:first-child').value;
        const location = document.querySelector('.search-input:last-child').value;

        // For demonstration, create some dummy results
        const dummyResults = [
            {
                name: "John Doe",
                skillSector: skill || "Construction",
                location: location || "New York",
                experience: "5 years of experience"
            },
            {
                name: "Jane Smith",
                skillSector: skill || "Electrical",
                location: location || "Boston",
                experience: "3 years of experience"
            }
        ];

        displaySearchResults(dummyResults);
    });
}

// Display search results
function displaySearchResults(results) {
    const resultsSection = document.getElementById('search-results');
    resultsSection.innerHTML = '';

    if (results.length === 0) {
        resultsSection.innerHTML = '<p class="no-results">No results found</p>';
        return;
    }

    results.forEach(worker => {
        const workerCard = document.createElement('div');
        workerCard.className = 'worker-card';
        workerCard.innerHTML = `
            <h3>${worker.name}</h3>
            <p><strong>Skill:</strong> ${worker.skillSector}</p>
            <p><strong>Location:</strong> ${worker.location}</p>
            <p><strong>Experience:</strong> ${worker.experience}</p>
        `;
        resultsSection.appendChild(workerCard);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 