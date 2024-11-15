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
        mouseWheel: false,  // Disable default mouseWheel behavior
        transition: 'slide',
        transitionSpeed: 'fast',
        
        // Controls
        controls: true,
        progress: true,
        center: true,
        slideNumber: true,
        
        // Features
        overview: true,
        keyboard: true,
        
        // Zoom Configuration
        zoom: {
            mouseWheel: true,  // Enable zoom via mouseWheel
            toggle: true,      // Enable zoom toggle
            scale: 2,         // Zoom scale factor
            pan: true,        // Enable panning while zoomed
            ctrlKey: true,    // Require ctrl key for zoom
            pauseOnZoom: true // Pause transitions while zoomed
        },

        // Plugins with zoom enabled
        plugins: [ 
            RevealMarkdown,
            RevealHighlight,
            RevealNotes,
            RevealZoom,  // Make sure zoom plugin is included
            mermaidPlugin
        ]
    });
}