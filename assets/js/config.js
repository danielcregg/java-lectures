function initializeReveal() {
    // Initialize Reveal.js
    Reveal.initialize({
        // Display
        width: 1200,
        height: 800,
        margin: 0.1,
        minScale: 0.2,
        maxScale: 2.0,
        
        // Navigation
        hash: true,
        mouseWheel: false,
        transition: 'slide',
        transitionSpeed: 'fast',
        
        // Controls
        controls: true,
        progress: true,
        center: true,
        slideNumber: true,
        
        // Features
        overview: true,
        touch: true,
        fragments: true,
        fragmentInURL: true,

        // Markdown config
        markdown: {
            smartypants: true,
            highlight: function (code, language) {
                if (language) {
                    return hljs.highlight(code, { language: language }).value;
                }
                return code;
            }
        },
        
        // Plugins
        plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealZoom ],

        // Customize keybindings
        keyboard: {
            // Custom key bindings
            33: 'prev', // PgUp
            34: 'next', // PgDown
            72: function() { // 'h' key
                window.location.href = '../index.html';
            }
        },

        // Dependencies for Mermaid
        dependencies: [{
            src: 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/9.3.0/mermaid.min.js',
            async: true,
            callback: function() {
                // Initialize Mermaid with settings
                mermaid.initialize({
                    startOnLoad: true,
                    theme: 'dark',
                    securityLevel: 'loose',
                    themeCSS: '.node rect { fill: #1a1a1a; }',
                    flowchart: {
                        curve: 'basis',
                        padding: 20
                    }
                });
            }
        }]
    });

    // Handle Mermaid diagrams
    if (typeof mermaid !== 'undefined') {
        // Initial render of Mermaid diagrams
        Reveal.addEventListener('ready', event => {
            let diagrams = document.querySelectorAll('.mermaid');
            diagrams.forEach(diagram => {
                try {
                    mermaid.init(undefined, diagram);
                } catch (e) {
                    console.warn('Mermaid initialization failed for a diagram:', e);
                }
            });
        });

        // Re-render Mermaid diagrams on slide change
        Reveal.on('slidechanged', event => {
            let diagrams = document.querySelectorAll('.mermaid');
            diagrams.forEach(diagram => {
                if (diagram.offsetParent !== null) {  // Check if diagram is visible
                    try {
                        mermaid.init(undefined, diagram);
                    } catch (e) {
                        console.warn('Mermaid re-initialization failed for a diagram:', e);
                    }
                }
            });
        });
    }

    // Add keyboard shortcut hint
    const helpContent = document.createElement('div');
    helpContent.className = 'help-overlay';
    helpContent.innerHTML = `
        <div style="position: fixed; bottom: 20px; right: 20px; background: rgba(0,0,0,0.8); padding: 10px; border-radius: 5px; display: none;">
            <h3>Keyboard Shortcuts</h3>
            <table>
                <tr><td>→, Space</td><td>Next slide</td></tr>
                <tr><td>←</td><td>Previous slide</td></tr>
                <tr><td>H</td><td>Return home</td></tr>
                <tr><td>F</td><td>Fullscreen</td></tr>
                <tr><td>ESC, O</td><td>Slide overview</td></tr>
            </table>
        </div>
    `;
    document.body.appendChild(helpContent);

    // Show help overlay on '?' key
    document.addEventListener('keydown', function(e) {
        if (e.key === '?') {
            const overlay = document.querySelector('.help-overlay div');
            if (overlay.style.display === 'none') {
                overlay.style.display = 'block';
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 3000); // Hide after 3 seconds
            } else {
                overlay.style.display = 'none';
            }
        }
    });
}