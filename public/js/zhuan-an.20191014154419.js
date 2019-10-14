(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js19').attr('src', (dpi>1) ? 'images/qrcode2-692-1.png' : 'images/qrcode2-346-1.png');
$('.js23').attr('src', (dpi>1) ? 'images/you-turn-1018.jpg' : 'images/you-turn-509.jpg');
$('.js24').attr('src', (dpi>1) ? 'images/dockpad-972.jpg' : 'images/dockpad-486.jpg');
$('.js25').attr('src', (dpi>1) ? 'images/progressive-mesh-1018-1.jpg' : 'images/progressive-mesh-509-1.jpg');
$('.js26').attr('src', (dpi>1) ? 'images/tadis-1018.jpg' : 'images/tadis-509.jpg');
$('.js15').attr('src', (dpi>1) ? 'images/partyscanner-cover-752.jpg' : 'images/partyscanner-cover-376.jpg');
$('.js18').attr('src', (dpi>1) ? 'images/qrcode1-538.jpg' : 'images/qrcode1-269.jpg');
$('.js20').attr('src', (dpi>1) ? 'images/qrcode3-510.jpg' : 'images/qrcode3-255.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var consent = new ConsentBanner('privacy-policy.html', 1);var wl = new woolite();
wl.init();
wl.addAnimation($('.js16')[0], "3.20s", "0.00s", 3, 100);
wl.addAnimation($('.js17')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js21')[0], "3.20s", "0.00s", 3, 100);
wl.addAnimation($('.js22')[0], "3.20s", "0.00s", 3, 100);
wl.addAnimation($('.js27')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});