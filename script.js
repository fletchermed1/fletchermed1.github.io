document.addEventListener('DOMContentLoaded', (event) => {
    const header = document.getElementById('headerBackground');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        if (header) {
            const newSizeX = 100 + mouseX * 50;
            const newSizeY = 100 + mouseY * 50;

            header.style.backgroundSize = `${newSizeX}% ${newSizeY}%`;
        }
    });

    if (header) {
        header.addEventListener('mouseleave', () => {
            header.style.backgroundSize = '100% auto';
        });
    }
});

