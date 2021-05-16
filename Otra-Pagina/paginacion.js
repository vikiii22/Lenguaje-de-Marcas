const sr = ScrollReveal({
    duration: 3000
});

sr.reveal('header', {
    origin: 'left',
    distance: '1000px',
    scale: 0.5,
    delay: 1000,
});

sr.reveal('body', {
    origin: 'top',
    distance: '1000px',
});

sr.reveal('.slider',{
    origin: 'rigth',
    distance: '1000px',
    reset: true
})

sr.reveal('footer', {
    origin: 'left',
    distance: '1000px',
    reset: true
});

sr.reveal('.card', {
    origin: 'left',
    reset: true
}, 500);

sr.reveal('h2', {
    origin: 'left',
    reset: true
}, 500);