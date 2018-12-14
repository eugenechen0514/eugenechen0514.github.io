(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var consent = new ConsentBanner('privacy-policy.html', 1);var wl = new woolite();
wl.init();
wl.addAnimation($('.js22')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js23')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js24')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});