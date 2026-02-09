// Main JavaScript for Abhinaya Website

// Load events from PHP API
async function loadEvents() {
    try {
        const response = await fetch('../api/events.php');
        const events = await response.json();
        
        const container = document.getElementById('events-container');
        if (container) {
            container.innerHTML = '';
            
            events.slice(0, 3).forEach(event => {
                const eventCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            ${event.image ? `<img src="../${event.image}" class="card-img-top" alt="${event.title}" style="height: 200px; object-fit: cover;">` : ''}
                            <div class="card-body">
                                <h5 class="card-title">${event.title}</h5>
                                <p class="card-text">
                                    <small class="text-muted">
                                        <i class="fas fa-calendar me-2"></i>
                                        ${new Date(event.event_date).toLocaleDateString()}
                                    </small>
                                </p>
                                <p class="card-text">${event.description ? event.description.substring(0, 100) + '...' : ''}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += eventCard;
            });
        }
    } catch (error) {
        console.error('Error loading events:', error);
    }
}

// Load gallery items
async function loadGallery() {
    try {
        const response = await fetch('../api/gallery.php');
        const gallery = await response.json();
        
        const container = document.getElementById('gallery-container');
        if (container) {
            container.innerHTML = '';
            
            gallery.forEach(item => {
                const galleryItem = `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            ${item.image ? `<img src="../${item.image}" class="card-img-top" alt="${item.title}" style="height: 250px; object-fit: cover;">` : ''}
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">
                                    <small class="text-muted">
                                        <i class="fas fa-tag me-2"></i>
                                        ${item.category || 'General'}
                                    </small>
                                </p>
                                <p class="card-text">${item.description ? item.description.substring(0, 100) + '...' : ''}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += galleryItem;
            });
        }
    } catch (error) {
        console.error('Error loading gallery:', error);
    }
}

// Load flyers
async function loadFlyers() {
    try {
        const response = await fetch('../api/flyers.php');
        const flyers = await response.json();
        
        const container = document.getElementById('flyers-container');
        if (container) {
            container.innerHTML = '';
            
            flyers.filter(flyer => flyer.is_active).forEach(flyer => {
                const flyerCard = `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            ${flyer.image ? `<img src="../${flyer.image}" class="card-img-top" alt="${flyer.title}" style="height: 350px; object-fit: cover;">` : ''}
                            <div class="card-body">
                                <h5 class="card-title">${flyer.title}</h5>
                                <p class="card-text">${flyer.description ? flyer.description.substring(0, 150) + '...' : ''}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += flyerCard;
            });
        }
    } catch (error) {
        console.error('Error loading flyers:', error);
    }
}

// Animate stats
function animateStats() {
    const stats = [
        { id: 'projects-count', target: 150, suffix: '+', duration: 2000 },
        { id: 'clients-count', target: 50, suffix: '+', duration: 2000 },
        { id: 'years-count', target: 5, suffix: '+', duration: 1500 },
        { id: 'team-count', target: 15, suffix: '+', duration: 1800 }
    ];

    stats.forEach(stat => {
        const element = document.getElementById(stat.id);
        if (element) {
            let current = 0;
            const increment = stat.target / (stat.duration / 16);
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.target) {
                    current = stat.target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + stat.suffix;
            }, 16);
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load content based on current page
    if (document.getElementById('events-container')) {
        loadEvents();
    }
    if (document.getElementById('gallery-container')) {
        loadGallery();
    }
    if (document.getElementById('flyers-container')) {
        loadFlyers();
    }
    
    // Animate stats if on homepage
    if (document.getElementById('projects-count')) {
        animateStats();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
