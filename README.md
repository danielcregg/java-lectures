# Java Programming Lectures

A comprehensive collection of Java programming lectures using Reveal.js for presentations.

## 🎯 Features

- Interactive slide presentations
- Syntax highlighted code examples
- Mermaid diagram support
- Responsive design
- Consistent styling across lectures
- Easy navigation between lectures

## 📚 Available Lectures

1. Java Serialization
2. Java Collections
3. [More coming soon...]

## 🚀 Getting Started

### Local Development

1. Clone this repository:
```bash
git clone https://github.com/[your-username]/java-lectures.git
cd java-lectures
```

2. Serve the files using a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000
```

3. Open `http://localhost:8000` in your browser

### Adding a New Lecture

1. Create a new slide content file in `lectures/content/[lecture-name]-slides.html`
2. Copy `lecture-template.html` to `lectures/[lecture-name].html`
3. Update the title in the new lecture file
4. Add a card to `index.html` linking to your new lecture

## 🎨 Customization

- Edit `assets/css/slides.css` to modify slide styles
- Edit `assets/css/main.css` to modify main page styles
- Edit `assets/js/config.js` to modify Reveal.js configuration

## ⌨️ Keyboard Shortcuts

- `→`, `Space`: Next slide
- `←`: Previous slide
- `Alt + H`: Return to home page
- `F`: Fullscreen
- `ESC`, `O`: Slide overview

## 📦 Dependencies

- [Reveal.js](https://revealjs.com/)
- [Highlight.js](https://highlightjs.org/)
- [Mermaid](https://mermaid-js.github.io/mermaid/)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📮 Contact

Daniel Cregg - daniel.cregg@atu.ie

Project Link: https://github.com/danielcregg/java-lectures