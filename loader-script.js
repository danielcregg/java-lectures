// Get the current lecture name from the URL
const lectureName = window.location.pathname.split('/').pop().replace('.html', '');
const slidesPath = `../lectures/content/${lectureName}-slides.html`;

// Load the slides content
fetch(slidesPath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Slides not found');
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('slides-container').innerHTML = html;
        // Initialize Reveal.js with shared config
        initializeReveal();
    })
    .catch(error => {
        console.error('Error loading slides:', error);
        document.getElementById('slides-container').innerHTML = `
            <section>
                <h2>Error Loading Slides</h2>
                <p>Could not load the slides content. Please check the URL and try again.</p>
                <p><a href="../index.html">Return to Lecture List</a></p>
            </section>
        `;
        initializeReveal();
    });