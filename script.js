const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');
const viewport = document.getElementById('viewport');

const pageCount = track.children.length;
let currentIndex = 0;

// Punkte erzeugen
for (let i = 0; i < pageCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dotsContainer.appendChild(dot);
}
const dots = dotsContainer.children;

function goTo(index) {
    currentIndex = Math.max(0, Math.min(pageCount - 1, index));
    // Kernidee: Track um (currentIndex * 100%) nach links schieben
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === pageCount - 1;

    [...dots].forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

// Optional: echtes Touch-Wischen zusätzlich zum Button
let startX = 0;
viewport.addEventListener('touchstart', e => startX = e.touches[0].clientX);
viewport.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
        diff < 0 ? goTo(currentIndex + 1) : goTo(currentIndex - 1);
    }
});

goTo(0);