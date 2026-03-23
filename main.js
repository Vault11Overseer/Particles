// PARTICLES WITH JS

// CANVAS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isMobile = window.innerWidth <= 768;

window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
});

// CANVAS WIDTH & HEIGHT
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// PARTICLE ARRAY
const particlesArray = [];

// HUE
let hue = 0;

// SETTINGS
let particleDensity = 10;
let particleShape = 'circle';

// MOUSE COORDINATES
const mouse = { x: undefined, y: undefined };

// INTRO
let showInstructions = true;

// PARTICLE CLASS
class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    // PARTICLE UPDATE
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    // PARTICLE DRAW
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        if (particleShape === 'circle') {
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        } else if (particleShape === 'square') {
            ctx.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
        }
        ctx.fill();
    }
}

// HANDLE PARTICLES
function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particlesArray[i].color;
                ctx.lineWidth = 0.2;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }

        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

// DRAW INSTRUCTIONS
function drawInstructions() {
    if (showInstructions) {
        ctx.textAlign = 'center';
        const fontSize = Math.min(30, canvas.width / 25);
        ctx.font = fontSize + 'px Arial';
        ctx.fillStyle = 'white';

        ctx.fillText(
            'Welcome to Particles Playground!',
            canvas.width / 2,
            canvas.height / 2
        );

        const instructionText = isMobile
            ? 'Tap, or drag your screen.'
            : 'Click the screen, or drag your mouse around.';

        ctx.fillText(
            instructionText,
            canvas.width / 2,
            canvas.height / 2 + fontSize * 2.5
        );
    }
}
// TIME OUT FOR TEXT DISPLAY
setTimeout(() => {
    showInstructions = false;
}, 3000);

// RESIZE HANDLER
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// INPUT HANDLING (MOUSE)
canvas.addEventListener('click', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;

    for (let i = 0; i < 1; i++) {
        particlesArray.push(new Particle);
    }
});

canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;

    for (let i = 0; i < particleDensity; i++) {
        particlesArray.push(new Particle);
    }
});

// INPUT HANDLING (TOUCH)
canvas.addEventListener('touchmove', function (e) {
    e.preventDefault();
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;

    for (let i = 0; i < particleDensity; i++) {
        particlesArray.push(new Particle);
    }
}, { passive: false });

canvas.addEventListener('touchstart', function (e) {
    e.preventDefault();
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;

    for (let i = 0; i < particleDensity; i++) { particlesArray.push(new Particle); }
}, { passive: false });

// UI INITIALIZATION (IMPORTANT FIX)
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const settingsPanel = document.getElementById('settings-panel');
    const densityInput = document.getElementById('density');
    const shapeInput = document.getElementById('shape');

    if (!menuBtn || !settingsPanel) return;
    // TOGGLE MENU
    const toggleMenu = () => {
        settingsPanel.classList.toggle('active');
    };

    // CLICK (DESKTOP / MOBILE)
    menuBtn.addEventListener('click', toggleMenu);

    densityInput.addEventListener('input', (e) => {
        particleDensity = parseInt(e.target.value);
    });

    shapeInput.addEventListener('change', (e) => {
        particleShape = e.target.value;
    });

    // SYNC INITIAL STATE - CACHED VALUES ON RESETART
    particleDensity = parseInt(densityInput.value);
    particleShape = shapeInput.value;
});

// ANIMATION LOOP
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    drawInstructions();
    hue += 12;
    requestAnimationFrame(animate);
}

animate();