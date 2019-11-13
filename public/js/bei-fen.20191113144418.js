(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js33').attr('src', (dpi>1) ? 'images/2018feb_180917_0296-574-1.jpg' : 'images/2018feb_180917_0296-287-1.jpg');
$('.js34').attr('src', (dpi>1) ? 'images/20171228-1230-hua-lian_180917_0389-686-1.jpg' : 'images/20171228-1230-hua-lian_180917_0389-343-1.jpg');
$('.js35').attr('src', (dpi>1) ? 'images/2018march_180917_0151-694-1.jpg' : 'images/2018march_180917_0151-347-1.jpg');
$('.js32').attr('src', (dpi>1) ? 'images/2018feb_180917_0270-762-1.jpg' : 'images/2018feb_180917_0270-381-1.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var consent = new ConsentBanner('privacy-policy.html', 1);
});