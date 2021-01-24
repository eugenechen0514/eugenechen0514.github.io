function ConsentBanner(t,e,n){if(this.policyPage=t,this.scrollAmount=e,this.consentIsSet="unknown",this.cookieConsent="cookieConsent=",this.ignoreCookies=n,this.queue=[],!this.ignoreCookies)for(var o=document.cookie.split(";"),s=0;s<o.length;s++){var i=o[s].trim();if(0==i.indexOf(this.cookieConsent)){this.consentIsSet=i.substring(this.cookieConsent.length,i.length);break}}}ConsentBanner.prototype.start=function(t){var e=this;if("true"==this.consentIsSet)this.doConsent();else{if(this.setPlaceholders("block"),"unknown"==this.consentIsSet)$("#consentBanner").css("display","block"),location.pathname.substr(location.pathname.lastIndexOf("/")+1)!=this.policyPage&&null!=this.scrollAmount&&this.activateScrollCheck(),t||$("a:not(.noConsent,.denyConsent,.removeConsent)").click(function(t){e.grantConsent()});$(".allowConsent").click(function(t){t.preventDefault(),e.grantConsent()})}"false"!=this.consentIsSet&&$(".denyConsent").click(function(t){t.preventDefault(),e.denyConsent()}),$(".removeConsent").click(function(t){t.preventDefault(),e.removeConsent()})},ConsentBanner.prototype.setCookie=function(t,e){window.console&&console.log(t),$("#consentBanner").fadeOut(500);var n=new Date;n.setTime(n.getTime()+31536e6);var o="expires="+n.toGMTString();this.ignoreCookies||(document.cookie=this.cookieConsent+e+"; "+o+";path=/;samesite=strict"),this.consentIsSet=e},ConsentBanner.prototype.removeCookie=function(t){window.console&&console.log(t),document.cookie=this.cookieConsent+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/",this.consentIsSet="false"},ConsentBanner.prototype.removeConsent=function(){"unknown"!=this.consentIsSet&&(this.removeCookie("Consent removed"),window.location.reload(!1))},ConsentBanner.prototype.denyConsent=function(){if("false"!=this.consentIsSet){var t="true"==this.consentIsSet;this.setCookie("Consent denied","false"),$(window).unbind("scroll"),$("a:not(.noConsent, .denyConsent, .removeConsent)").unbind("click"),t&&window.location.reload(!1)}},ConsentBanner.prototype.grantConsent=function(){"true"!=this.consentIsSet&&(this.setCookie("Consent granted","true"),window.gaf&&window.gaf(),this.doConsent())},ConsentBanner.prototype.activateScrollCheck=function(){var t=this;$(window).scroll(function(){$(window).scrollTop()>t.scrollAmount&&t.grantConsent()})},ConsentBanner.prototype.doConsent=function(){window.console&&console.log("Consent was granted");var t=this;this.activateQueue(function(){t.setPlaceholders("none"),t.activateHidden(),t.activateScripts(),t.activateSources(),t.activateEmbeds()})},ConsentBanner.prototype.activateScripts=function(){$(".activateAfterConsent").each(function(){$(this).replaceWith(eval($(this).text()))})},ConsentBanner.prototype.activateSources=function(){$(".activateSrcAfterConsent").each(function(){var t=$(this).attr("disabledsrc");$(this).removeAttr("disabledsrc"),$(this).attr("src",t)})},ConsentBanner.prototype.addToQueue=function(t){this.queue.push(t)},ConsentBanner.prototype.activateQueue=function(t){var e,n=0,o=this.queue.length,s=function(){++n==o&&t()};for(e=0;e<o;++e)this.queue[e](s);0==o&&t()},ConsentBanner.prototype.require=function(t){var e=this;if(null==e.scripts||t>=e.scripts.length)$(".activateEmbedAfterConsent").each(function(){$(this).remove()});else{var n=e.scripts[t],o=document.createElement("script"),s=n.js;if(null==s){document.getElementsByTagName("head")[0].appendChild(o),o.onload=function(t){return function(){e.require(t)}}(t+1),o.onreadystatechange=function(t){return function(){"complete"==this.readyState&&e.require(t)}}(t+1)}else{var i=n.el;$(i).before(o)}for(var r=n.attrs,c=null!=r?r.length:0,a=0;a<c;a++)o.setAttribute(r[a][0],r[a][1]);if(null!=s){try{o.appendChild(document.createTextNode(s))}catch(t){o.text=s}e.require(t+1)}}},ConsentBanner.prototype.activateEmbeds=function(){var consentBanner=this;$(".activateEmbedAfterConsent").each(function(){var html=JSON.parse(eval($(this).text())),els=jQuery.parseHTML(html,document,!1);$(this).before(els);for(var scriptRe=/<script\b([^>]*?)>([\s\S]*?)<\/script>/gi,attrsRe=/([^\s=]+)(=[\"|\']([^'"]+)[\'|\"])?/gi,matches;null!=(matches=scriptRe.exec(html));){for(var src=null,js=null,attrs,attributes=new Array;null!=(attrs=attrsRe.exec(matches[1]));)"src"==attrs[1]&&(src=attrs[3]),attributes.push([attrs[1],void 0!==attrs[3]?attrs[3]:""]);if(void 0===consentBanner.scripts&&(consentBanner.scripts=new Array),void 0!==matches[2]&&matches[2].length)js=matches[2],consentBanner.scripts.push({js:js,attrs:attributes,el:this});else if(null!=src){var length=consentBanner.scripts.length,i;for(i=0;i<length&&(null==consentBanner.scripts[i].src||consentBanner.scripts[i].src!=src);i++);i==length&&consentBanner.scripts.push({src:src,attrs:attributes})}}}),consentBanner.require(0)},ConsentBanner.prototype.activateHidden=function(){$(".consentHidden").each(function(){$(this).attr("style","")})},ConsentBanner.prototype.setPlaceholders=function(t){$(".consentPlaceholder").each(function(){$(this).css("display",t)})};