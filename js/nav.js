window.setTimeout(function() { 
    const tl = gsap.timeline({repeat:0, repeatDelay:1, yoyo:true});
    tl.to(".home", {duration: 1, text:" SERVICIOS"});
                
    TweenLite.defaultEase = Power0.easeNone;
    TweenMax.set("#navBar", {transformOrigin:"100% 50%"});
    
    TweenMax.from("#navBar", 1, {autoAlpha:0 ,width:"0px",  ease:Power0.easeNone, repeat:0, repeatDelay:1})
    TweenMax.to("#navBar", 1, {autoAlpha:1 ,width:"100%",  ease:Power0.easeNone, repeat:0, repeatDelay:1})
    
    tl.to(".SERVICIOS", {duration: 0.75, text:"HOME"});
    tl.to(".GIFTS", {duration: 0.75, text:" GIFTS"});
    tl.to(".BLOG", {duration: 0.75, text:" BLOG"});
}, 2000)