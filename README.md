# Particles

An interactive, mobile-friendly HTML5 canvas particle system with real-time controls and responsive input handling.

## Demo

Live demo: https://jaredmatta.com/Particles/

---

## Overview

Particles is a lightweight browser-based visualization built using vanilla JavaScript and the HTML Canvas API. It renders animated, multi-colored particles that react to user input in real time.

The project has been expanded beyond a basic mouse-driven demo to include full mobile support, a responsive UI, and an in-app settings panel for adjusting behavior dynamically.

---

## Features

### Core

* Real-time particle generation based on user input
* Smooth animation loop using `requestAnimationFrame`
* Color cycling using HSL values
* Particle motion with velocity and size decay
* Dynamic line connections between nearby particles

---

### Mobile & Responsiveness

* Full touch support (`touchstart`, `touchmove`)
* Optimized for mobile interaction and performance
* Safe-area positioning (`env(safe-area-inset-*)`)
* Responsive canvas resizing on window resize

---

### UI & Controls

* Hamburger menu (☰) for settings access
* Toggleable settings panel
* Adjustable particle density slider
* Shape selector:

  * Circle
  * Square

---

### Performance Safeguards

* Density control to prevent excessive particle spawning
* Optional particle caps for GPU safety
* Efficient cleanup of particles via size decay
* Reduced interaction overhead for mobile devices

---

## Tech Stack

* HTML5 Canvas
* Vanilla JavaScript (no frameworks)

---

## Getting Started

### Prerequisites

* Any modern browser (mobile or desktop)

### Installation

1. Clone the repository:

```
git clone <repository-url>
```

2. Navigate into the project:

```
cd particles
```

3. Run locally (optional):

```
python -m http.server
```

Then open:

```
http://localhost:8000
```

Or simply open `index.html` directly in your browser.

---

## Usage

### Desktop

* Move your mouse across the screen to generate particles
* Click to spawn particles at a point

### Mobile

* Drag or Tap your finger across the screen to generate particles
* Tap to create bursts

### Settings

* Tap the ☰ (hamburger menu) in the top-left
* Adjust:

  * Particle density
  * Particle shape

---

## Project Structure

```
particles/
├── index.html
├── main.js
└── favicon.ico
```

---

## Key Improvements

* Added full touch support for mobile devices
* Implemented hamburger settings menu UI
* Added live particle customization controls
* Fixed mobile interaction issues caused by touch event blocking
* Improved performance stability with controlled density and cleanup
* Ensured responsive layout across screen sizes

---

## Future Improvements

* Particle size and speed controls in UI
* Color palette customization
* Preset configurations (themes)
* Advanced physics (gravity, attraction, collisions)
* Further GPU optimization for large particle counts

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## Issues

Report bugs or unexpected behavior via the repository’s issue tracker.

---

## License

No license specified. Add one if you plan to distribute or reuse.

---

## Notes

This project focuses on a clean, dependency-free implementation of a real-time particle system with practical UI controls and mobile compatibility.
