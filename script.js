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

    
    document.querySelectorAll("#skills h2").forEach(el => {
        el.style.color = smoothColor;
    });

    
    document.querySelectorAll("#quote h2, #quote p").forEach(el => {
        el.style.color = smoothColor;
    });

    
    document.querySelectorAll(".skill-card").forEach(card => {
        card.style.color = "white";
    });
});
