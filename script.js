let isDragging = false;
let startX, startY;
let scale = 1;
let offsetX = 0, offsetY = 0;

document.body.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        isDragging = true;
        startX = e.clientX - offsetX;
        startY = e.clientY - offsetY;
        document.body.style.cursor = 'grabbing'; 
    }
});

document.body.addEventListener('mousemove', (e) => {
    if (isDragging) {
        offsetX = e.clientX - startX;
        offsetY = e.clientY - startY;
        document.querySelector('.space').style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
});

document.body.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'grab'; 
});

document.body.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
        scale += 0.1; 
    } else {
        scale -= 0.1; 
    }
    scale = Math.max(0.5, Math.min(3, scale)); 
    document.querySelector('.space').style.transform = `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`;
});
