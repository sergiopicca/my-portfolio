gsap.registerPlugin(ScrollTrigger)

window.onload = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".container",
            start: "center bottom",
            end: "center top",
            scrub: true,
            markers: true
        }
    });
    tl.from(".container", {x: -200, duration: 1, zIndex: -2})
    tl.to(".container", {x: 0, duration: 1, zIndex: 1})
}