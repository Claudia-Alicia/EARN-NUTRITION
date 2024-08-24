document.addEventListener("DOMContentLoaded", function() {
    // Add a delay for the logo and header text fade-in
    setTimeout(function() {
        document.querySelector(".fade-in-text").style.opacity = 1;
    }, 1000);

    // Slide-in effect for sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
