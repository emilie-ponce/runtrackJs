window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    const colorValue = Math.min(Math.max(scrollPercentage, 0), 100);
    footer.style.backgroundColor = `rgb(${colorValue}%, 0%, ${100 - colorValue}%)`;
});