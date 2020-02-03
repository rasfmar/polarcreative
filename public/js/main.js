$(function() {
    // Initialize AOS Library
    AOS.init();

    // .sep
    let sepContent = $('.sep').html(),
        newSepContent = '',
        aosDelay = 50,
        aosDelayIncrement = 50,
        aosTransition = 'fade-down',
        aosDuration = 800,
        aosDurationIncrement = 0;

    for(let i = 0; i < sepContent.length; i++) {
        newSepContent += `<span data-aos='${aosTransition}' data-aos-once='true' data-aos-delay='${aosDelay + i*aosDelayIncrement}' data-aos-duration='${aosDuration + i*aosDurationIncrement}'><h1>${sepContent.charAt(i)}</h1></span>`;
    }

    $('.sep').addClass('activated').html(newSepContent);

    // particles.js
    particlesJS.load('particles-js', 'js/particles.json');
});
