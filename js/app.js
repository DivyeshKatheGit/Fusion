
/*gsap */

var tl = gsap.timeline();
tl.to('.sec1',{
    width : '50%',
    duration :1
})
.to('.title',{
    opacity : 1,
    duration : 0.5,
    x : 300
})

/*scroll magic */

var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene(
        {
            triggerElement : '.sec1',
            triggerHook : 0,
            offset : 10
        }
    )
    .setTween(".sec1",1,{
            width : '100%',
            ease : 'power3'
    })
    .addTo(controller);
var scene2 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec1',
        triggerHook : 0,
        offset : 0
    }
    )
    .setTween(".mission",1,{
            opacity : 1
    })
    .addTo(controller);

var scene3 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec3-1-title',
        offset : 100,
        reverse : false
    }
    )
    .setTween(".sec3-1-right",1,{
        x : 0
    })
    .addIndicators()
    .addTo(controller);

var scene4 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec3-2-title',
        offset : 100,
        reverse : false
    }
    )
    .setTween(".sec3-2-left",1,{
        x : 0
    })
    .addIndicators()
    .addTo(controller);

var scene5 = new ScrollMagic.Scene(
    {
        triggerElement : '.sec3-3-title',
        offset : 100,
        reverse : false
    }
    )
    .setTween(".sec3-3-top",1,{
        height : '400px'
    })
    .addIndicators()
    .addTo(controller);
