document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const totalSections = sections.length;
    let currentIndex = 0;
    let isScrolling = false;

    
    sections.forEach((section, index) => {
        section.style.transform = `translateY(${index * 100}%)`;
    });

  
    const scrollToSection = (index) => {
        if (isScrolling) return; 
        isScrolling = true;

        currentIndex = (index + totalSections) % totalSections; 
        sections.forEach((section, i) => {
            section.style.transform = `translateY(${(i - currentIndex) * 100}%)`;
        });

        setTimeout(() => (isScrolling = false), 600);
    };

    
    let scrollTimeout;
    window.addEventListener('wheel', (e) => {
        clearTimeout(scrollTimeout); 
        scrollTimeout = setTimeout(() => {
            if (e.deltaY > 0) {
                scrollToSection(currentIndex + 1); 
            } else {
                scrollToSection(currentIndex - 1); 
            }
        }, 100);
    });

    
    document.body.addEventListener('click', () => {
        scrollToSection(currentIndex + 1); 
    });

    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            scrollToSection(currentIndex + 1); 
        } else if (e.key === 'ArrowUp') {
            scrollToSection(currentIndex - 1); 
        }
    });
});



