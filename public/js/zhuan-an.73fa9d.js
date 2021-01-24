(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},f=function(e){return e.target.closest("a")},p=function(t){var r=t.relatedTarget;r&&f(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=f(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=f(r);c(n)&&(n.addEventListener("mouseout",p,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){dpi=window.devicePixelRatio;var a='data-src';var e=document.querySelector('.js20');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/qrcode1-552.jpg':'images/qrcode1-276.jpg');
var a='data-src';var e=document.querySelector('.js21');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/qrcode2-692-1.png':'images/qrcode2-346-1.png');
var a='data-src';var e=document.querySelector('.js22');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/qrcode3-510.jpg':'images/qrcode3-255.jpg');
var a='data-src';var e=document.querySelector('.js24');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/placeholder-400.png':'images/placeholder-200.png');
var a='data-src';var e=document.querySelector('.js26');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/you-turn-1018-1.jpg':'images/you-turn-509-1.jpg');
var a='data-src';var e=document.querySelector('.js27');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dockpad-972-1.jpg':'images/dockpad-486-1.jpg');
var a='data-src';var e=document.querySelector('.js28');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/progressive-mesh-1018-1.jpg':'images/progressive-mesh-509-1.jpg');
var a='data-src';var e=document.querySelector('.js29');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/tadis-1018-2.jpg':'images/tadis-509-2.jpg');
var e=document.querySelector('.js18');e.setAttribute('src',(dpi>1)?'images/partyscanner-cover-752.jpg':'images/partyscanner-cover-376.jpg');
var a='data-src';var e=document.querySelector('.js31 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/t1-766.png':'images/t1-383.png');
var a='data-src';var e=document.querySelector('.js31 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/t2-766.png':'images/t2-383.png');
var a='data-src';var e=document.querySelector('.js31 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/t3-766.png':'images/t3-383.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
ldsrc('.js20');ldsrcset('.js32 source');ldsrc('.js21');ldsrcset('.js33 source');ldsrc('.js22');ldsrcset('.js34 source');ldsrc('.js24');ldsrcset('.js35 source');ldsrc('.js26');ldsrcset('.js36 source');ldsrc('.js27');ldsrcset('.js37 source');ldsrc('.js28');ldsrcset('.js38 source');ldsrc('.js29');ldsrcset('.js39 source');$('.js31 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2150});var cs=new ConsentBanner('privacy-policy.html', undefined, 0);cs.start(1);wl=new woolite();
wl.init();
wl.addAnimation($('.js17')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js19')[0], "3.20s", "0.00s", 3, 100);
wl.addAnimation($('.js23')[0], "3.20s", "0.00s", 3, 100);
wl.addAnimation($('.js25')[0], "3.20s", "0.00s", 3, 100);
wl.addAnimation($('.js30')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});