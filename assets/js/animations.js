gsap.registerPlugin(ScrollTrigger)

const showMarkers = false

const init = () => {
    // Animazione titoli sezioni
    gsap.utils.toArray('.sectionTitle').forEach((title) => {
        const [span] = [title.getElementsByTagName('span')]
        const parent = title.parentElement
        console.log(parent)

        const tTitle = gsap.timeline({
            scrollTrigger: {
                trigger: parent,
                start: 'center-=300px center',
                end: 'center-=100px center',
                once: true,
                scrub: 1,
                markers: false
            }
        });

        tTitle.fromTo(span, {yPercent: 100}, {yPercent: 0})
    })

    // INTRO
    // Animazione zoom-in della sezione intro
    const [l1, l2] = [...document.getElementsByClassName('lxLine')]
    const [r1, r2] = [...document.getElementsByClassName('rxLine')]
    const staticTl = gsap.timeline({
        defaults: {
            duration: 1.5,
            ease: "linear",
        },
        //onStart: () => (document.body.style.overflow = 'hidden'),
        //onComplete: () => (document.body.style.overflow = 'auto')
    })
    staticTl.add('lines')
        .fromTo([l1, r1], {scaleX: 0}, {autoAlpha: 1, scaleX: 1, duration: .25}, 'lines')
        .fromTo([l2, r2], {scaleY: .0}, {autoAlpha: 1, scaleY: 1, duration: .25}, 'lines')
        .add('start')
        .to('.introImg', {autoAlpha: 1}, 'start+=.5s')
        .fromTo('.titleContainer', {xPercent: -100}, {xPercent: 0, autoAlpha: 1}, 'start+=1s')
        .fromTo('.hello', {yPercent: -50}, {yPercent: 0, autoAlpha: 1}, 'start+=1s')
        .fromTo('.role', {yPercent: 100}, {yPercent: 0, autoAlpha: 1}, 'start+=1.5s')
        .fromTo('.introDescription', {yPercent: -100}, {yPercent: 0, autoAlpha: 1}, 'start+=1.75s')

    const tlIntro = gsap.timeline({
        scrollTrigger: {
            trigger: '#whoiam',
            pin: '#whoiam',
            pinSpacing: 'margin',
            start: "top top",
            end: '+=600px 25%',
            scrub: 1.5,
            markers: false
        },
    })
    tlIntro.fromTo('.titleContainer', {xPercent: 0, opacity: 1}, {xPercent: -100, opacity: 0})
    tlIntro.add('init')
    tlIntro.fromTo('.hello', {yPercent: 0, opacity: 1}, {yPercent: -50, opacity: 0}, 'init')
    tlIntro.fromTo([l1, r1], {scaleX: 1.005}, {scaleX: 0, duration: .5}, 'init')
    tlIntro.fromTo([l2, r2], {scaleY: 1.005}, {scaleY: 0, duration: .5}, 'init')
    tlIntro.add('fade')
    tlIntro.fromTo('.role', {yPercent: 1, opacity: 1}, {yPercent: 80, opacity: 0}, 'fade')
    tlIntro.fromTo('.introDescription', {yPercent: 0, opacity: 1}, {yPercent: -80, opacity: 0}, 'fade+=0.25%')
    tlIntro.fromTo('.imgContainer', {opacity: 1}, {opacity: 0}, 'fade')


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
        const [dot, time, infoContainer] = [...careerStep.children]
        const timeInfoTweenStart = {opacity: 0}
        const timeInfoTweenEnd = {opacity: 1}
        const [line1, line2] = [...careerStep.getElementsByClassName("line")]
        const [svgContainer] = [...careerStep.getElementsByClassName("svgContainer")]
        const [period] = [...careerStep.getElementsByClassName("period")]
        const [where] = [...careerStep.getElementsByClassName("where")]
        const start = 'center center'
        const end = 'center center'

        const currentTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: careerStep,
                start: start,
                end: end,
                once: true,
                scrub: 1.25,
                markers: false,
                defaults: {
                    duration: 2.5
                }
            }
        });
        currentTimeline.add('linesfirst')
            .fromTo(dot, dotTweenStart, dotTweenEnd, 'linesfirst')
            .fromTo([line1, line2], {opacity: 0, scaleX: 0}, {opacity: 1, scaleX: 1}, 'linesfirst')
            .add('logo')
            .fromTo(svgContainer, {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0}, 'logo')
            .fromTo([period, where], timeInfoTweenStart, timeInfoTweenEnd, 'logo')
            .add('rest')
            .fromTo(infoContainer, {opacity: 0, xPercent: 100}, {opacity: 1, xPercent: 0}, 'rest')
    })

    // SKILLS
    // Animazione bar charts della sezione skills
    const tSkills = gsap.timeline({
        scrollTrigger: {
            trigger: '.programmingContainer',
            start: 'top center',
            end: 'center center',
            once: true,
            scrub: true,
            markers: false
        }
    });

    gsap.utils.toArray('.value').forEach((v, i) => {
        if (i === 0) {
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
            trigger: '.softSkillsContainer',
            start: 'top-=50px center',
            end: 'center center',
            once: true,
            scrub: 1.5,
            markers: false,
            defaults: {duration: 10}
        }
    });

    const [polarGridConcentric] = document.getElementsByClassName('recharts-polar-grid-concentric')
    const [polarGridAngles] = document.getElementsByClassName('recharts-polar-grid-angle')
    const paths = polarGridConcentric.getElementsByTagName('path')
    const pathLines = polarGridAngles.getElementsByTagName('line')
    // cerchi
    gsap.utils.toArray(paths).reverse().forEach((p, i) => {
        p.style.transformOrigin = '50% 50%';
        const fr = {css: {transform: 'scale(0)'}}
        const to = {css: {transform: 'scale(1)'}}
        tSkillsSoft.fromTo(p, fr, to)
    })

    // prima linea asse radiale
    gsap.utils.toArray('.radiusAxis').forEach((p, i) => {
        p.style.transformOrigin = '50% 50%';
        const fr = {css: {transform: 'scale(0)'}}
        const to = {css: {transform: 'scale(1)'}}
        tSkillsSoft.fromTo(p, fr, to)
    })

    // ticks prima linea asse radiale
    gsap.utils.toArray('.recharts-polar-radius-axis-tick').forEach((t, i) => {
        const fr = {opacity: 0}
        const to = {opacity: 1}
        tSkillsSoft.fromTo(t, fr, to)
    })

    // linee radiali
    gsap.utils.toArray(pathLines).forEach((p, i) => {
        p.style.transformOrigin = '50% 50%';
        const fr = {css: {transform: 'scale(0)'}}
        const to = {css: {transform: 'scale(1)'}}
        tSkillsSoft.fromTo(p, fr, to)
    })

    // poligono più esterno
    const [poligonoEsternoContainer] = document.getElementsByClassName('recharts-polar-angle-axis')
    const poligonoEsterno = poligonoEsternoContainer.getElementsByClassName('angleAxis')
    gsap.utils.toArray(poligonoEsterno).forEach((p, i) => {
        p.style.transformOrigin = '50% 50%';
        const fr = {css: {transform: 'scale(0)'}}
        const to = {css: {transform: 'scale(1)'}}
        tSkillsSoft.fromTo(p, fr, to)
    })

    // area poligono
    const [poligonoAreaContainer] = document.getElementsByClassName('recharts-radar-polygon')
    const poligonoArea = poligonoAreaContainer.getElementsByClassName('recharts-polygon')
    gsap.utils.toArray(poligonoArea).forEach((p, i) => {
        const color = '198, 32, 92'
        p.style.transformOrigin = '50% 50%';
        const fr = {css: {stroke: 'rgba(' + color + ', 0)', fill: 'rgba(' + color + ', 0)'}}
        const to = {css: {stroke: 'rgba(' + color + ', 1)', fill: 'rgba(' + color + ', 1)'}}
        tSkillsSoft.fromTo(p, fr, to, 'polygon')
    })

    // pallini poligono
    gsap.utils.toArray('.recharts-radar-dot').forEach((p, i) => {
        const fr = {opacity: 0}
        const to = {opacity: 1}
        tSkillsSoft.fromTo(p, fr, to)
    })

    // labels
    gsap.utils.toArray('.recharts-text.recharts-polar-angle-axis-tick-value').forEach((t, i) => {
        const fr = {opacity: 0}
        const to = {opacity: 1}
        tSkillsSoft.fromTo(t, fr, to)
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
            trigger: '.langTableSection',
            start: 'top center',
            end: 'center center',
            once: true,
            scrub: 1.25,
            markers: false
        }
    });

    const [langTableSection] = document.getElementsByClassName('langTableSection')
    const paragraph = langTableSection.getElementsByTagName('p')
    const [table] = langTableSection.getElementsByTagName('table')
    const th = table.getElementsByTagName('th')
    const tr = table.getElementsByTagName('tr')

    // paragrafo
    tSkillsTable.fromTo(paragraph, {xPercent: 50, opacity: 0}, {xPercent: 0, opacity: 1})
    // headers tabella
    gsap.utils.toArray(th).forEach((t, i) => {
        const fr = {opacity: 0, yPercent: 50}
        const to = {opacity: 1, yPercent: 0}
        tSkillsTable.fromTo(t, fr, to)
    })
    // rows tabella
    gsap.utils.toArray(tr).forEach((t, i) => {
        const fr = {opacity: 0, yPercent: 50}
        const to = {opacity: 1, yPercent: 0}
        tSkillsTable.fromTo(t, fr, to)
    })

    // PAPER SECTION
    const tPaperTitle = gsap.timeline({
        scrollTrigger: {
            trigger: '.paperTitle',
            start: 'top center',
            end: 'center center',
            once: true,
            scrub: 1.25,
            markers: false
        }
    });

    // titolo paper
    const [paperTitleContainer] = document.getElementsByClassName('paperTitle')
    paperTitleContainer.style.overflow = 'hidden'
    const [paperTitle] = paperTitleContainer.getElementsByTagName('div')
    tPaperTitle.fromTo(paperTitle, {yPercent: 100}, {yPercent: 0})

    // authors
    const tPaperAuthors = gsap.timeline({
        scrollTrigger: {
            trigger: '.authors',
            start: 'top center',
            end: 'bottom center',
            once: true,
            scrub: 1.25,
            markers: false
        }
    });
    const [authorsWrapper] = document.getElementsByClassName('authors')
    const [authorsContainer] = document.getElementsByClassName('authorsContainer')
    const [authors] = authorsContainer.getElementsByTagName('div')
    authorsContainer.style.overflow = 'hidden'
    authorsWrapper.style.transformOrigin = '0 0'
    tPaperAuthors.fromTo(authorsWrapper, {opacity: 0}, {opacity: 1})
    tPaperAuthors.fromTo(authors, {yPercent: 200}, {yPercent: 0}, 1)

    // paragraph
    const tPapersContent = gsap.timeline({
        scrollTrigger: {
            trigger: '.paperContent',
            start: 'top center',
            end: 'center center',
            once: true,
            scrub: 1.25,
            markers: false
        }
    });

    // imgs
    const tPaperPreviews = gsap.timeline({
        scrollTrigger: {
            trigger: '.previews',
            start: 'top center',
            end: 'center center',
            once: true,
            scrub: 1.25,
            markers: false
        }
    });
    tPaperPreviews.fromTo('.previews', {opacity: 0}, {opacity: 1})

    // abstract
    const [contentWrapper] = document.getElementsByClassName('paperContent')
    const [content] = contentWrapper.getElementsByTagName('p')
    contentWrapper.style.overflow = 'hidden'
    tPapersContent.fromTo(content, {yPercent: 200}, {yPercent: 0})
    tPapersContent.fromTo('.paperContentLabel', {opacity: 0}, {opacity: 1})

    const tLinks = gsap.timeline({
        scrollTrigger: {
            trigger: '.paperLinksContainer',
            start: 'top center',
            end: 'bottom center',
            once: true,
            scrub: true,
            markers: false
        }
    });

    const links = Array.from(document.getElementsByClassName('paperLinksContainer'))
        .shift()
        .getElementsByTagName('a')
    gsap.utils.toArray(links).forEach((v, i) => {
        if (i === 0) {
            tLinks.fromTo(v, {xPercent: 400}, {xPercent: 0, duration: 1.5})
        } else {
            tLinks.fromTo(v, {xPercent: 400}, {xPercent: 0, duration: 1.5}, i / 5)
        }
    })

    // HONOURS
    const tHonours = gsap.timeline({
        scrollTrigger: {
            trigger: '.hImgContainer',
            start: 'top center',
            end: 'center+=200px center',
            once: true,
            scrub: true,
            markers: false,
            defaults: {
                duration: 1
            }
        }
    });
    const [imgContainer] = document.getElementsByClassName('hImgContainer')
    const [img] = imgContainer.getElementsByTagName('span')
    const lines = imgContainer.getElementsByTagName('div')
    img.style.position = 'relative'
    tHonours.fromTo(lines, {opacity: 0}, {opacity: 1})
    tHonours.fromTo(img, {css: {top: '500px'}}, {css: {top: '0px'}})

    const [titleWrapper] = document.getElementsByClassName('hTitle')
    const [title] = titleWrapper.getElementsByTagName('div')
    const [dateWrapper] = document.getElementsByClassName('hDate')
    const [date] = dateWrapper.getElementsByTagName('p')

    titleWrapper.style.overflow = 'hidden'
    dateWrapper.style.overflow = 'hidden'
    tHonours.fromTo(title, {yPercent: 150}, {yPercent: 0})
    tHonours.fromTo(date, {yPercent: 150}, {yPercent: 0})
    tHonours.fromTo('.hDesc', {xPercent: 200, opacity: 0}, {xPercent: 0, opacity: 1})

    // EDUCATION
    const tEdu = gsap.timeline({
        scrollTrigger: {
            trigger: '#education',
            start: 'top center',
            end: 'center center',
            once: true,
            scrub: true,
            markers: false
        }
    });
    gsap.utils.toArray('.educationCard').forEach((v, i) => {
        if (i === 0) {
            tEdu.fromTo(v, {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1})
        } else {
            tEdu.fromTo(v, {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1, duration: 1}, i/2)
        }
    })
}

window.addEventListener('load', () => {
    if (window.innerWidth >= 1200) {
        init()
    }
})