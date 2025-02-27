const scrollContainer = document.getElementById('scroll-container');
        const leftScroll = document.getElementById('left-scroll');
        const rightScroll = document.getElementById('right-scroll');

        leftScroll.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -250,
                behavior: 'smooth'
            });
        });

        rightScroll.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: 250,
                behavior: 'smooth'
            });
});

const scrollContainer2= document.getElementById('scroll-container2');
        const leftScroll2 = document.getElementById('left-scroll2');
        const rightScroll2 = document.getElementById('right-scroll2');

        leftScroll2.addEventListener('click', () => {
            scrollContainer2.scrollBy({
                left: -250,
                behavior: 'smooth'
            });
        });

        rightScroll2.addEventListener('click', () => {
            scrollContainer2.scrollBy({
                left: 250,
                behavior: 'smooth'
            });
});