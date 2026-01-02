// document.addEventListener('DOMContentLoaded', () => {
//     const imageItems = document.querySelectorAll('.image-items');

//     imageItems.forEach(item => {
//         item.addEventListener('click', () => {
//             const url = item.getAttribute('data-url');
//             window.open(url, '_blank');
//         });
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.hidden').forEach(element => {
        observer.observe(element);
    });
});