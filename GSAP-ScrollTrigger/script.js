gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        markers:true,
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h1",
        markers:true,
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from("#page3 #box",{
    scale:0,
    opacity:0,
    duration:1,
    rotate:720,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:2
    }
})



// gsap.from("#page1 #box",{
//     scale:0,
//     duration:1,
//     delay:1,
//     rotate:720
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     duration:2,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"

        
//     }
// })