document.addEventListener('DOMContentLoaded', function() {
    // Add home button
    const homeButton = document.createElement('a');
    homeButton.href = '../index.html';
    homeButton.className = 'home-button';
    homeButton.innerHTML = '🏠 Home';
    document.body.appendChild(homeButton);

    // Give Mermaid time to load
    window.setTimeout(() => {
        try {
            // Initialize presentations
            initializeReveal();

            // Initialize Mermaid diagrams after reveal is ready
            Reveal.on('ready', () => {
                let diagrams = document.querySelectorAll('.mermaid');
                diagrams.forEach(diagram => mermaid.init(undefined, diagram));
            });
        } catch (e) {
            console.error('Error initializing presentation:', e);
            document.querySelector('.slides').innerHTML = `
                <section>
                    <h2>Error Loading Presentation</h2>
                    <p>There was an error initializing the presentation.</p>
                    <p><a href="../index.html">Return to Lecture List</a></p>
                </section>
            `;
        }
    }, 100);
});