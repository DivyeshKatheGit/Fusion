const menu_bar = document.querySelector('.menu-bar');
const wrapper = document.querySelector('.wrapper');
const menu = document.querySelector('.menu');
const menu_list = document.querySelector('.menu-list');
var menuflag = true;

/*menu bar */
menu_bar.addEventListener('click',()=>
{
    if(menuflag)
    {
        menu.classList.add('active');
        wrapper.classList.add('active');
        //wrapper.style.display = 'none';
        menuflag=false;
        gsap.from(".menu-list",{
            x :-200,
            opacity : 0,
            duration : 1,
            delay : .5,
            ease : 'power3'
        });
    }
    else
    {
        menu.classList.remove('active');
        wrapper.classList.remove('active');
        //wrapper.style.display = 'block';
        menuflag=true;
    }
    
})