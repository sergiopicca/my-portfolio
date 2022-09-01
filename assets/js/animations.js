gsap.registerPlugin(ScrollTrigger)

const showMarkers = false

window.onload = () => {
    // Animazione titoli sezioni
    gsap.utils.toArray('.sectionTitle').forEach((title) => {
        const [span] = [title.getElementsByTagName('span')]
        const parent = title.parentElement

        const tTitle = gsap.timeline({
            scrollTrigger: {
                trigger: parent,
                start: 'top-=100px top',
                end: '+=75px',
                once: true,
                scrub: .5,
                markers: false
            }
        });

        tTitle.fromTo(span, {
            css: {
                transform: 'translate(0,100%)'
            }
        }, {
            css: {
                transform: 'translate(0, 0)'
            },
            opacity: 1,
            duration: 1
        })
    })

    // INTRO
    // Animazione zoom-in della sezione intro
    const tlIntro = gsap.timeline({
        scrollTrigger: {
            trigger: '#whoiam',
            pin: '#whoiam',
            pinSpacing: true,
            start: "top top",
            end: '+=500px 10%',
            scrub: true,
            markers: false
        },
    })
    const [l1, l2] = [...document.getElementsByClassName('lxLine')]
    const [r1, r2] = [...document.getElementsByClassName('rxLine')]
    tlIntro.add('init')
    tlIntro.to('.hello', {yPercent: -50, opacity: 0}, 'init')
    tlIntro.fromTo([l1, r1], {scaleX: 1.005}, {scaleX: 0, duration: .5}, 'init')
    tlIntro.fromTo([l2,r2], {scaleY: 1.005}, {scaleY: 0, duration: .5}, 'init')
    tlIntro.to('.titleContainer', {xPercent: -100, opacity: 0})
    tlIntro.add('fade')
    tlIntro.to('.role', {yPercent: 50, opacity: 0}, 'fade')
    tlIntro.to('.introDescription', {yPercent: -50, opacity: 0}, 'fade+=0.5%')
    tlIntro.to('.imgContainer', { opacity: 0}, 'fade')


    // CAREER
    // Animazione Career section timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#career',
            start: 'top-=400px top',
            end: '+=400px',
            once: true,
            scrub: true,
            markers: false
        }
    });
    const dotTweenStart = {scale: 0}
    const dotTweenEnd = {scale: 1.1, duration: 1}
    tl.fromTo('#timeline-line', {
        scaleY: 0,
    }, {
        scaleY: 1.025,
        duration: 2.5
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
        let start = 'top+=300px top'
        let end = '+=300px'

        if (i === 2) {
            start = 'top+=700px top'
            end = '+=400px'
        }
        currentTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#career',
                start: start,
                end: end,
                once: true,
                scrub: true,
                markers: false
            }
        });
        currentTimeline.fromTo(dot, dotTweenStart, dotTweenEnd)
        currentTimeline.fromTo([time, infoContainer], timeInfoTweenStart, timeInfoTweenEnd)
    })

    // SKILLS
    // Animazione bar charts della sezione skills
    const tSkills = gsap.timeline({
        scrollTrigger: {
            trigger: '#skills',
            start: 'top top',
            end: '+=400px 50%',
            once: true,
            scrub: true,
            markers: false
        }
    });

    gsap.utils.toArray('.value').forEach((v, i) => {
        if(i === 0) {
            tSkills.fromTo(v, {
                scaleY: 0
            }, {
                scaleY: 1.005,
                duration: 1
            })
        } else {
            tSkills.fromTo(v, {
                scaleY: 0
            }, {
                scaleY: 1.005,
                duration: 1
            }, i / 5)
        }
    })

    tSkills.fromTo('.techKnowledgeDescription', {
        opacity: 0,
        xPercent: -5
    }, {
        xPercent: 0,
        opacity: 1,
        duration: 3
    })

    const tSkillsSoft = gsap.timeline({
        scrollTrigger: {
            trigger: '#skills',
            start: 'center center',
            end: '+=300px 50%',
            once: true,
            scrub: true,
            markers: false
        }
    });

    tSkillsSoft.fromTo('.radarChart', {
        css: {
            transformOrigin: '50% 50%',
            transform: 'scale(0) rotate(-270deg)'
        }
    }, {
        css: {
            transform: 'scale(1) rotate(0deg)'
        }
    })

    tSkillsSoft.fromTo('.softSkillsDescription', {
        opacity: 0,
        xPercent: 5
    }, {
        opacity: 1,
        xPercent: 0,
        duration: 1
    })

    const tSkillsTable = gsap.timeline({
        scrollTrigger: {
            trigger: '#skills',
            start: 'center center',
            end: '+=1000px center',
            once: true,
            scrub: true,
            markers: false
        }
    });

    tSkillsTable.fromTo('.langTableSection', {
        opacity: 0,
        xPercent: -5
    }, {
        opacity: 1,
        xPercent: 0,
        duration: 1
    })

    // PAPER SECTION
    const tPaper = gsap.timeline({
        scrollTrigger: {
            trigger: '#publications',
            start: 'top top',
            end: '+=400px 50%',
            once: true,
            scrub: true,
            markers: false
        }
    });

    tPaper.fromTo('.paperTitle', {opacity: 0}, {opacity: 1})
    tPaper.fromTo('.authors', {opacity: 0}, {opacity: 1, duration: 1})
    tPaper.fromTo('.previews', {opacity: 0}, {opacity: 1, duration: 1})
    gsap.utils.toArray('.content').forEach((v, i) => {
        const delay = i === 0 ? 0 : i
        tPaper.fromTo(v, {opacity: 0}, {opacity: 1}, delay)
    })
    gsap.utils.toArray('.paperLink').forEach((v, i) => {
        const currentT = gsap.timeline({
            scrollTrigger: {
                trigger: '#publications',
                start: '80% 50%',
                end: '+=400px 50%',
                once: true,
                scrub: true,
                markers: false
            }
        });
        if (i === 0) {
            currentT.fromTo(v, {xPercent: 5, opacity: 0}, {xPercent: 0, opacity: 1, duration: 1.5})
        } else {
            currentT.fromTo(v, {xPercent: 5, opacity: 0}, {xPercent: 0, opacity: 1, duration: 1.5}, i / 5)
        }
    })

    // HONOURS
    // TODO : animazioni honours

    // EDUCATION
    const tEdu = gsap.timeline({
        scrollTrigger: {
            trigger: '#education',
            start: 'top top',
            end: '+=200px 50%',
            once: true,
            scrub: true,
            markers: false
        }
    });
    gsap.utils.toArray('.educationCard').forEach((v, i) => {
        if (i === 0) {
            tEdu.fromTo(v, {yPercent: 4, opacity: 0}, {yPercent: 0, opacity: 1})
        } else {
            tEdu.fromTo(v, {yPercent: (4 + i/2), opacity: 0}, {yPercent: 0, opacity: 1, duration: 1.5}, i / 5)
        }
    })
}