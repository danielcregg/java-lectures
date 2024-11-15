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
                window.location.href = '/ooc2-lectures/';  // Updated path for GitHub Pages
            },
            191: function() { // '?' key
                toggleHelpOverlay();
            }
        },

        // Dependencies for Mermaid
        dependencies: [{
            src: 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/9.3.0/mermaid.min.js',
            async: true,
            callback: function() {
                initializeMermaid();
            }
        }]
    }).then(() => {
        setupMermaidHandlers();
    });

    // Initialize Mermaid with consistent settings
    function initializeMermaid() {
        mermaid.initialize({
            startOnLoad: false,  // Changed to false to avoid double initialization
            theme: 'dark',
            securityLevel: 'loose',
            themeCSS: '.node rect { fill: #1a1a1a; }',
            flowchart: {
                curve: 'basis',
                padding: 20,
                useMaxWidth: true
            },
            sequence: {
                mirrorActors: false,
                bottomMarginAdj: 10
            }
        });
    }

    // Setup Mermaid diagram handlers
    function setupMermaidHandlers() {
        if (typeof mermaid !== 'undefined') {
            // Initial render
            Reveal.addEventListener('ready', event => {
                renderVisibleMermaidDiagrams();
            });

            // Re-render on slide change
            Reveal.on('slidechanged', event => {
                renderVisibleMermaidDiagrams();
            });
        }
    }

    // Render only visible Mermaid diagrams
    function renderVisibleMermaidDiagrams() {
        document.querySelectorAll('.mermaid').forEach(diagram => {
            if (diagram.offsetParent !== null) {
                try {
                    // Clean up any existing rendered content
                    const cleanText = diagram.textContent.replace(/<[^>]*>/g, '');
                    diagram.textContent = cleanText;
                    mermaid.init(undefined, diagram);
                } catch (e) {
                    console.warn('Mermaid diagram error:', e);
                    diagram.innerHTML = `<pre class="error">Diagram rendering failed: ${e.message}</pre>`;
                }
            }
        });
    }

    // Create and add help overlay
    const helpContent = document.createElement('div');
    helpContent.className = 'help-overlay';
    helpContent.innerHTML = `
        <div class="help-content" style="display: none;">
            <h3>Keyboard Shortcuts</h3>
            <table>
                <tr><td>→, Space</td><td>Next slide</td></tr>
                <tr><td>←</td><td>Previous slide</td></tr>
                <tr><td>H</td><td>Return home</td></tr>
                <tr><td>F</td><td>Fullscreen</td></tr>
                <tr><td>ESC, O</td><td>Slide overview</td></tr>
                <tr><td>?</td><td>Show/hide this help</td></tr>
            </table>
        </div>
    `;
    document.body.appendChild(helpContent);

    // Toggle help overlay
    function toggleHelpOverlay() {
        const overlay = document.querySelector('.help-content');
        if (overlay.style.display === 'none') {
            overlay.style.display = 'block';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 3000);
        } else {
            overlay.style.display = 'none';
        }
    }
}