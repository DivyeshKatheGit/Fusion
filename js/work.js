/*gsap */

var tl = gsap.timeline();
tl.to('.title',{
    opacity : 1,
    duration : 0.5,
    x : 50
})
.to('.mission',{
    y : '0',
    opacity : 1,
    duration : 0.5,
})