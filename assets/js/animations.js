gsap.registerPlugin(ScrollTrigger)

const showMarkers = false

window.onload = () => {
    // Animazione titoli sezioni
    gsap.utils.toArray('.sectionTitle').forEach((title) => {
        const [span] = [title.getElementsByTagName('span')]

        const tTitle = gsap.timeline({
            scrollTrigger: {
                trigger: title,
                start: 'center center',
                end: 'center center',
                once: false,
                scrub: .5,
                markers: showMarkers
            }
        });

        tTitle.fromTo(span, {
            transform: 'translate(0,100%)'
        }, {
            transform: 'translate(0, 0)',
            opacity: 1,
            duration: 1
        })
    })

    // INTRO
    // Animazione zoom-in della sezione intro
    const tlIntro = gsap.timeline({
        scrollTrigger: {
            trigger: '#whoiam',
            pin: true,
            start: "top top",
            end: '+=5000',
            pinSpacing: false,
            scrub: 0,
            markers: showMarkers
        },
        defaults: {
            ease: new SlowMo(0.5, 0.8),
            duration: 4
        }
    })
    tlIntro.to('#whoiam', {
        scale: 8,
        yPercent: -500,
        opacity: 0,
    }, .15).to('#whoiam', {
        scale: 1
    })

    // CAREER
    // Animazione Career section timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#career',
            start: 'top top',
            end: '+=1000',
            once: false,
            pin: '#career',
            pinSpacing: true,
            scrub: true,
            markers: showMarkers
        }
    });
    const dotTweenStart = {scale: 0}
    const dotTweenEnd = {scale: 1.1, duration: 2}
    tl.fromTo('#timeline-line', {
        scaleY: 0,
        css: {transformOrigin: '0 0'}
    }, {
        scaleY: 1 / 3
    })

    gsap.utils.toArray(".careerStep").forEach((careerStep, i) => {
        const [dot, infoContainer, time] = [...careerStep.children]
        const timeInfoTweenStart = {opacity: 0}
        const timeInfoTweenEnd = {opacity: 1, duration: 2}

        if (i === 0) {
            tl.fromTo(dot, dotTweenStart, dotTweenEnd)
            tl.fromTo([time, infoContainer], timeInfoTweenStart, timeInfoTweenEnd)
            return
        }

        let currentTimeline = null
        let start = 'center center'
        if (i === 2) {
            start = 'center+=500 center'
        }
        currentTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#career',
                start: start,
                end: 'bottom+=1000 bottom',
                pin: '#career',
                pinSpacing: true,
                once: false,
                scrub: true,
                markers: showMarkers
            }
        });
        currentTimeline.to('#timeline-line', { scaleY: (i + 1) / 3})
        currentTimeline.fromTo(dot, dotTweenStart, dotTweenEnd)
        currentTimeline.fromTo([time, infoContainer], timeInfoTweenStart, timeInfoTweenEnd)
    })

    // SKILLS
    // Animazione bar charts della sezione skills
    const tSkills = gsap.timeline({
        scrollTrigger: {
            trigger: '#skills',
            start: 'top top',
            end: 'bottom+=1000 bottom',
            pin: '#skills',
            pinSpacing: true,
            once: false,
            scrub: true,
            markers: showMarkers
        }
    });

    const tSkillsSoft = gsap.timeline({
        scrollTrigger: {
            trigger: '#skills',
            start: 'center center',
            end: 'bottom+=1000 bottom',
            pin: '#skills',
            pinSpacing: true,
            once: false,
            scrub: true,
            markers: showMarkers
        }
    });

    const tSkillsTable = gsap.timeline({
        scrollTrigger: {
            trigger: '#skills',
            start: 'center center',
            end: 'bottom+=1000 bottom',
            pin: '#skills',
            pinSpacing: true,
            once: false,
            scrub: true,
            markers: showMarkers
        }
    });

    tSkills.fromTo('.techKnowledgeDescription', {
        opacity: 0,
        xPercent: -50
    }, {
        xPercent: 0,
        opacity: 1
    })

    gsap.utils.toArray('.value').forEach((v, i) => {
        tSkills.fromTo(v, {
            scaleY: 0,
            css: {
                transformOrigin: '0 100%'
            }
        }, {
            scaleY: 1.005,
            duration: 1
        })
    })

    tSkillsSoft.fromTo('.radarChart', {
        css: {
            transformOrigin: '50% 50%',
            transform: 'scale(0) rotate(270deg)'
        }
    }, {
        css: {
            transform: 'scale(1) rotate(0deg)'
        }
    })

    tSkillsSoft.fromTo('.softSkillsDescription', {
        opacity: 0,
        xPercent: 50
    }, {
        opacity: 1,
        xPercent: 0
    })

}