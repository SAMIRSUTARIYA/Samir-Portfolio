// Header-Animation
gsap.from("#header",{
    opacity:0,
    duration:1,
    y:50
}) 

// Home-Section--Animation
gsap.from(".home-content h1",{
    x:-1000,
    opacity:0,
    duration:1,
})
gsap.from(".home-content h3",{
    x:-1000,
    opacity:0,
    duration:1.2,
})
gsap.from(".home-content .social-icons",{
    x:-1000,
    opacity:0,
    duration:1.4,
})
gsap.from(".home-content .btn-group",{
    x:-1000,
    opacity:0,
    duration:1.4,
})
gsap.from("#home .home-img",{
    x:1000,
    opacity:0,
    duration:1,
})

// Education-Section-Animation
gsap.from("#education h2",{
    y:100,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#education h2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 90%",
        scrub:3
    }
}) 
gsap.from(".timeline-items #timeline-item-1, .timeline-items #timeline-item-3",{
    x:-1000,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".timeline-items #timeline-item-1, .timeline-items #timeline-item-3",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 90%",
        scrub:3
    }
})
gsap.from(".timeline-items #timeline-item-2, .timeline-items #timeline-item-4",{
    x:1000,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".timeline-items #timeline-item-2, .timeline-items #timeline-item-4",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 90%",
        scrub:3
    }
})

// Services-Section-Animation
gsap.from("#services h2",{
    y:100,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#services h2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 90%",
        scrub:4
    }
})
gsap.from("#service-box-left #service-info-left",{
    x:-1000,
    opacity:0,
    duration:1,
    delay:2,
    scrollTrigger:{
        trigger:"#service-box-left #service-info-left",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 90%",
        scrub:4
    }
})
gsap.from("#service-box-right #service-info-right",{
    x:1000,
    opacity:0,
    duration:1,
    delay:2,
    scrollTrigger:{
        trigger:"#service-box-right #service-info-right",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 90%",
        scrub:4
    }
})

// Contact-Section-Animation
gsap.from("#contact h2",{
    y:100,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#contact h2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 90%",
        scrub:4
    }
})
gsap.from("#contact form",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#contact form",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 90%",
        scrub:4
    }
})

// Footer-Section-Animation
gsap.from(".footer .social, .footer ul, .footer p",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".footer .social, .footer ul, .footer p",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 90%",
        scrub:3
    }
})