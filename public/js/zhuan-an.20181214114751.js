(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js19').attr('src', (dpi>1) ? 'images/progressive-mesh-1018.jpg' : 'images/progressive-mesh-509.jpg');
$('.js20').attr('src', (dpi>1) ? 'images/tadis-1018.jpg' : 'images/tadis-509.jpg');
$('.js16').attr('src', (dpi>1) ? 'images/dockpad-972.jpg' : 'images/dockpad-486.jpg');
$('.js18').attr('src', (dpi>1) ? 'images/you-turn-1016.jpg' : 'images/you-turn-508.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var consent = new ConsentBanner('privacy-policy.html', 1);var wl = new woolite();
wl.init();
wl.addAnimation($('.js15')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js17')[0], "3.20s", "0.00s", 3, 100);
wl.addAnimation($('.js21')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});