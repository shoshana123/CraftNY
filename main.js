
let tl = new TimelineLite();
tl.add([TweenLite.to('#logo', 3.5, {opacity: 1, ease: Linear.easeNone})])
// tl.add([TweenLite.to("#hello", .2, {opacity:1, ease:Linear.easeNone}),TweenLite.to("#l", .2, {opacity:1, ease:Linear.easeNone}))]);

window.onload = function(){
  tl.play();
};
