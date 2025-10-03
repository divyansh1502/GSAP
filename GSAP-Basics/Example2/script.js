gsap.from("h1",{
    // color: "red",
    opacity: 0,
    y: 20,
    // stagger: .5,
    stagger: -0.3,
    duration: 1,
    delay: 1,
    repeat:-1,
    yoyo:true
})
gsap.to("#box",{
    x:1350,
    duration:2,
    delay:1,
    rotate:180,
    repeat:-1,
    yoyo:true
})
// gsap.to("#box1",{
//     x:1350,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// gsap.to("#box2",{
//     x:1350,
//     backgroundColor:"cyan",
//     duration:1.5,
//     delay:2.5
// })
// gsap.to("#box3",{
//     x:1350,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4
// })
var tl = gsap.timeline()

tl.to("#box1", {
    x:1300,
    rotate:180,
    duration:1.5,
    delay:1
}) 
tl.to("#box2",{
    x:1300,
    duration:1.5,
    backgroundColor: "cyan"
})
tl.to("#box3",{
    x:1300,
    duration:1.5,
    scale:.5,
    rotate:90
})
var nav = gsap.timeline()

nav.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})
nav.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    stagger: 0.3
})
gsap.from("#hey",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2
})
