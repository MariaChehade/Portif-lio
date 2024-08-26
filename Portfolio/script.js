document.addEventListener('DOMContentLoaded', function () {

    const estiloDivs = document.querySelectorAll('.estiloDiv');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add('in-view');
        } else {

            entry.target.classList.remove('in-view');
        }
        });
    }, { threshold: 0.9}); 


    estiloDivs.forEach(div => {
        observer.observe(div);
    });
    });
