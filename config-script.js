function initializeReveal() {
    Reveal.initialize({
        hash: true,
        mouseWheel: true,
        transition: 'slide',
        transitionSpeed: 'fast',
        plugins: [],
        dependencies: [],
        controls: true,
        progress: true,
        center: true,
        width: 1200,
        height: 800,
        // Add navigation controls
        navigationMode: 'default',
        // Enable slide numbers
        slideNumber: true,
        // Add menu button to return to main page
        menu: {
            themes: false,
            transitions: false,
            markers: true,
            custom: [
                { title: 'Home', icon: '<i class="fa fa-home"></i>', content: '<a href="../index.html">Return to Lecture List</a>' }
            ]
        }
    });

    // Initialize syntax highlighting
    hljs.initHighlightingOnLoad();

    // Initialize Mermaid
    mermaid.initialize({
        startOnLoad: true,
        theme: 'dark',
        securityLevel: 'loose',
        themeCSS: '.node rect { fill: #1a1a1a; }'
    });
}