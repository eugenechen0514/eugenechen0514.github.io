(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js5').attr('src', (dpi>1) ? 'images/2018feb_180917_0270-620.jpg' : 'images/2018feb_180917_0270-310.jpg');
$('.js').attr('src', (dpi>1) ? 'images/2018feb_180917_0253-824.jpg' : 'images/2018feb_180917_0253-412.jpg');
$('.js4').attr('src', (dpi>1) ? 'images/2018march_180917_0151-826.jpg' : 'images/2018march_180917_0151-413.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var consent = new ConsentBanner('privacy-policy.html', 1);var wl = new woolite();
wl.init();
wl.addAnimation($('.js2')[0], "0.60s", "0.00s", 1, 100);
wl.addAnimation($('.js3')[0], "0.60s", "0.00s", 1, 100);
wl.addAnimation($('.js6')[0], "0.70s", "0.00s", 1, 100);
wl.start();

});