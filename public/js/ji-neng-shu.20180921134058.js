(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js10').attr('src', (dpi>1) ? 'images/if_code-programming-javascript-software-develop-command-language_652581-272.png' : 'images/if_code-programming-javascript-software-develop-command-language_652581-136.png');

};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.s41').Stickyfill();
var consent = new ConsentBanner('privacy-policy.html', 1);var wl = new woolite();
wl.init();
wl.addAnimation($('.js7')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js8')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js13')[0], "0.40s", "0.00s", 1, 35);
wl.addAnimation($('.js14')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js15')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});