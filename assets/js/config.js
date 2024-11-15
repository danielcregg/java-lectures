function initializeReveal() {
    // Initialize Mermaid
    mermaid.initialize({
        startOnLoad: false,
        theme: 'dark'
    });

    // Create Mermaid plugin
    const mermaidPlugin = {
        id: 'mermaid',
        init: function(reveal) {
            reveal.on('ready', event => { mermaid.init(); });
            reveal.on('slidechanged', event => { mermaid.init(); });
        }
    };

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
        touch: {
            enabled: true,
            addKeyboardHandler: false,
        },
        keyboard: true,
        
        // Custom touch settings
        gestureHandling: {
            passive: true,
            handlers: {
                touchstart: { passive: true },
                touchmove: { passive: true },
                touchend: { passive: true }
            }
        },
        fragments: true,
        fragmentInURL: true,

        // Markdown config
        markdown: {
            smartypants: true
        },
        
        // Plugins
        plugins: [ 
            RevealMarkdown,
            RevealHighlight,
            RevealNotes,
            RevealZoom,
            mermaidPlugin
        ]
    });
}