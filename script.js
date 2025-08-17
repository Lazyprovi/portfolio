window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    
    const darkness = Math.min(scrollPercent * 1, 1);
    document.querySelector(".overlay").style.background =
        `rgba(0, 0, 0, ${darkness})`;

    
    const colorValue = Math.floor(darkness * 255);
    const smoothColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

   
    document.querySelectorAll("#about h1, #about h2").forEach(el => {
        el.style.color = smoothColor;
    });

    
    document.querySelectorAll("#quote h2, #quote p").forEach(el => {
        el.style.color = smoothColor;
    });

    
    document.querySelectorAll(".skill-card").forEach(card => {
        card.style.color = "white";
    });
});

const skillDescriptions = {
    html: "Markup language for creating web pages.",
    css: "Stylesheet language for designing web pages.",
    csharp: "Programming language for building applications.",
    pcbuilding: "Assembling and troubleshooting computer hardware.",
    programming: "Writing code to solve problems and build software."
};

const skillCards = document.querySelectorAll('.skill-card');
const descContainer = document.getElementById('skill-desc-container');

skillCards.forEach(card => {
    card.addEventListener('click', function (e) {
        e.stopPropagation(); 
        skillCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        descContainer.classList.remove('active');
        setTimeout(() => {
            const skill = card.getAttribute('data-skill');
            descContainer.textContent = skillDescriptions[skill] || "";
            descContainer.classList.add('active');
        }, 400);
    });
});


document.addEventListener('click', function (e) {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection.contains(e.target)) {
        skillCards.forEach(c => c.classList.remove('active'));
        descContainer.classList.remove('active');
    }
});
