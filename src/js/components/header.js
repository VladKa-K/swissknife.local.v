document.addEventListener("DOMContentLoaded", function() { 
    const header = document.querySelector('header');
    const link = document.querySelectorAll('.js--main-menu a');
    const highlighter = document.querySelector('.js--heder-highlight') ?? false;
    let windowWidth = window.innerWidth;

    window.addEventListener('resize', () => {
        windowWidth = window.innerWidth;
        if(highlighter) {
            highlighter.removeAttribute('style');
    
            if(windowWidth < 767) {
                highlighter.classList.add('hidden');
            } else {
                highlighter.classList.remove('hidden');
            }
        }
    })

    const changeHeaderOnScroll = () => {
        if(window.pageYOffset > 0) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    }
    changeHeaderOnScroll();

    window.addEventListener('scroll', () => {
        changeHeaderOnScroll();
    });

    function linkHighlightin(e) {
        if(highlighter) {
            const linkPositions = e.getBoundingClientRect();
      
            highlighter.style.width = `${linkPositions.width}px`
            highlighter.style.height = `${linkPositions.height}px`
            highlighter.style.transform = `translate(${linkPositions.left + window.scrollX}px, ${linkPositions.top + window.scrollY}px)`
        }
    }
    
    link.forEach((e) => {
        e.addEventListener('mouseenter', function() {
            if(windowWidth >= 768) {
                linkHighlightin(e);
            }
        });
    });
});