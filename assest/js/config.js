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
        slideNumber: 'c/t',
        
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
        plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ],

        // Customize keybindings
        keyboard: {
            // Custom key bindings
            33: 'prev', // PgUp
            34: 'next', // PgDown
            72: function() { // 'h' key
                window.location.href = '../index.html';
            }
        },
    });

    // Initialize Mermaid
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
    
    // Add event listeners for special features
    Reveal.addEventListener('ready', event => {
        // Auto-render all Mermaid diagrams
        mermaid.init(undefined, '.mermaid');
    });
}