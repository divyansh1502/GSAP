var path = "M 10 100 Q 600 100 1190 100"

var finalPath = "M 10 100 Q 600 100 1190 100"

var string = document.querySelector("#string")

string.addEventListener("mouseenter",function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 1190 100`
    gsap.to("svg path",{
        attr:{ d: path },
        duration:0.2,
        ease:"power2.out"
    })
})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{ d: finalPath },
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})