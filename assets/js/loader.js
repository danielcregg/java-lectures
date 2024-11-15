// Get the current lecture name from the URL
const lectureName = window.location.pathname.split('/').pop().replace('.html', '');
const slidesPath = `../lectures/${lectureName}.html`;

// Load the slides content
fetch(slidesPath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Slides not found');
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('slides').innerHTML = html;
        try {
            initializeReveal();
        } catch (e) {
            console.error('Error initializing Reveal:', e);
        }
    })
    .catch(error => {
        console.error('Error loading slides:', error);
        document.getElementById('slides').innerHTML = `
            <section>
                <h2>Error Loading Slides</h2>
                <p>Could not load the slides content. Please try again.</p>
                <p><a href="../index.html">Return to Lecture List</a></p>
            </section>
        `;
        initializeReveal();
    });