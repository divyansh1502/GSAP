function breakTheText() {
    var h1 = document.querySelector("h1")
    var h1Text = document.querySelector("h1").textContent;

    var splittedText = h1Text.split("");
    var halfValue = Math.floor(splittedText.length/2)

    var clutter = ""

    splittedText.forEach(function(e,idx){
        if(idx < halfValue) {
            clutter += `<span class="a">${e}</span>`
        } else {
            clutter += `<span class="b">${e}</span>`
        }
    })
    
    h1.innerHTML = clutter
}
breakTheText();

gsap.from (".a",{
    y:50,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.15
    
})
gsap.from (".b",{
    y:50,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:-0.15
    
})