(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js3').attr('src', (dpi>1) ? 'images/2018feb_180917_0253-824-1.jpg' : 'images/2018feb_180917_0253-412-1.jpg');
$('.js6').attr('src', (dpi>1) ? 'images/2018march_180917_0151-826-1.jpg' : 'images/2018march_180917_0151-413-1.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var consent = new ConsentBanner('privacy-policy.html', 1);var wl = new woolite();
wl.init();
wl.addAnimation($('.js2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js4')[0], "0.60s", "0.00s", 1, 100);
wl.addAnimation($('.js5')[0], "0.60s", "0.00s", 1, 100);
wl.addAnimation($('.js7')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});