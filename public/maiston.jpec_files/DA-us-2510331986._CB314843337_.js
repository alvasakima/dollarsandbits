/* Autogenerated at Fri Jul 24 11:46:27 PDT 2015 */
;
/* Source: DA.js */
(function(h,m,D){try{var E=location.protocol.replace(/file/,"http"),$=navigator.userAgent.toLowerCase(),l=function(a,b){if(a)if(a.length>=0)for(var c=0,e=a.length;c<e;c++)b(c,a[c]);else for(c in a)b(c,a[c])},A=function(a,b){if(a&&b)for(var c in b)a[c]=b[c];return a},aa=function(a,b,c){b=b||h;K(b.document)?a():(c&&(a=function(){setTimeout(a,c)}),r(b,"load",a,!0))},K=function(a){var b=a.readyState;return b=="complete"||a.tagName=="script"&&b=="loaded"},B=function(a){return(a=RegExp(a+"[ /](\\d+(\\.\\d+)?)",
"i").exec($))?+a[1]:0},F=B("msie");B("webkit");var ba=function(a,b){var b=b||"&",c=[];l(a,function(a,b){c.push(a+"="+b)});return c.join(b)},j=h.DA||(h.DA=[]),L=function(a){if(typeof a=="object")return a;var b={};l(a.split(";"),function(a,e){var f=e.split("=");b[f[0]]=f[1]});(h.aanParams=h.aanParams||{})[b.slot]=a;return b},M=function(a){var b=a.iframeId||a.c,c=a.c,e=a.a,f=a.o;h.DAF=a.ifp?[b,e,c,a.ifp]:[b,e];a=a.f||1;a===1&&(a=ca+(f?"-dismissible":"")+(h.jQuery&&jQuery.fn.amazonPopoverTrigger?"":"-external"));
da(a)},I=function(a){var b=ea+"feedback?",c=[];a.marketplaceId=fa;for(key in a)c.push(key+"="+encodeURIComponent(a[key]));b+=c.join("&");(new Image).src=b},g=function(a,b){return typeof a=="string"?(b||m).getElementById(a):a},o=function(a,b){return(b=g(b||m))?b.getElementsByTagName(a):[]},v=function(a,b,c,e,f){a=(v[a]||(v[a]=m.createElement(a))).cloneNode(!0);A(a,b);w(a,c);e&&(b=a,e=g(e),b=g(b),e&&b&&(typeof f=="number"&&(f=g(e).childNodes[f]),e.insertBefore(b,f||null)));return a},w=function(a,b){var c=
b.opacity;isNaN(c)||A(b,{filter:"alpha(opacity="+c*100+")",mozOpacity:b.opacity});(a=g(a))&&A(a.style,b)},G=function(a){if(a=g(a)){var b=g(a).parentNode;b&&b.removeChild(a)}},p=function(a,b){if(a=g(a))a.innerHTML=b},r=function(a,b,c,e){if(a=g(a)){var f=function(d){if(d=d||h.event){var N=d.target||d.srcElement;if(N){if(e){var i=a,n=f;if(i=g(i))i.removeEventListener?i.removeEventListener(b,n,!1):i.detachEvent?i.detachEvent("on"+b,n):delete i["on"+b]}return c(d,N,f)}}};a.addEventListener?a.addEventListener(b,
f,!1):a.attachEvent?a.attachEvent("on"+b,f):a["on"+b]=f;return f}},ga=o("head")[0],da=j.s=function(a){v("script",{src:a.replace(/^[a-z]+:/,E)},0,ga)},O=(E=="http:"?"//g-ecx.":"//images-na.ssl-")+"images-amazon.com/images/G/01/",fa="ATVPDKIKX0DER",ea="//fls-na.amazon.com/1/advertising-feedback/1/OE/",Q=["Yes","No"];h.foresterRegion="na";var ca=j.f="/aan/2009-09-09/ad/feedback.us/default?pt=RemoteContent&slot=main&pt2=us",S=function(a){var b=function(b){if(!m.all&&!/%/.test(a.width)){var c=a.clientWidth;
if(c)a.style.width=c+b+"px"}};b(-1);b(1);var c=(b=g(a).parentNode)?b.id:"";if(F>0&&(!m.documentMode||m.documentMode<8)&&/nsm/.test(c)&&!/%/.test(a.height))a.height&&(a.height-=1);try{R(a),b&&(a.contentWindow.d16gCollapse?w(b,{display:"none"}):b.clientHeight||w(b,{height:"auto",marginBottom:"16px"}))}catch(e){}},R=function(a){var b=g(a).parentNode,c=b.ad||a,e=c.f,f=/nsm/.test(b.id),d,h=typeof c.fi==="undefined"?!0:c.fi,i=c.ss,n=typeof c.ifp==="undefined"?!1:c.ifp.sif,s=n&&c.ifp.wid&&c.ifp.tid?c.ifp.tid:
"";c.iframeId=a.id.replace(/[^0-9]/g,"");c.c=c.c||c.iframeId;var q=F>0&&(!m.documentMode||m.documentMode<8);if(q&&n)n=!1,c.ifp.sif=0;try{var k=a.contentWindow;k.suppressAdFeedback&&(e=!1);if(k.inlineFeedback&&typeof k.inlineFeedback=="object"||location.href.indexOf("useNewFeedback=true")>=0)d=k.inlineFeedback||{},d.endpoint=d.endpoint||"//fls-na.amazon.com/1/dco-exp/1/OP",d.id=d.id||"default",d.question=d.question&&typeof d.question==="string"?d.question:"Is this ad appropriate?",d.options=d.options&&
typeof d.options==="object"&&d.options.length?d.options:Q,d.ad=k.aanResponse||{}}catch(la){d=!1}var k="Ad feedback",T='<b style="display:inline-block;vertical-align:top;margin:1px 0;width:14px;height:12px;background:url('+O+'productAds/ad_feedback_icon_1Xsprite.png)"></b>',t="0 -13px";q&&(T='<b style="display:inline-block;font-size:9px;vertical-align:top;margin:1px 0;width:12px;height:12px;background:url('+O+'da/js/bubble._V1_.png)"></b>',t="0 -12px");var j,H;c.g=="right"?(q="0px",j="4px",H="Ad "):
(q=parseInt(a.width)+5+"px",j="0",H="Ad<br>");var u=o("div",b)[0]||v("div",{id:"DAnsmFeedback"},{position:f?"absolute":"relative",top:"2px",right:f?q:0,margin:0,height:"14px"},b);!i||(u.style.cssText=i);if(e&&(!o("a",u)[0]||!o("div",u)[0])){if(d){p(u,"");var C=v("div",0,{position:"absolute",top:"1px",left:0,font:"normal 8pt Verdana,Arial",display:"inline-block",verticalAlign:"middle"},u),z="";z+='<label style="font:normal 8pt Verdana,Arial;vertical-align:middle;margin-right:5px;display:inline-block">'+
d.question+"</label>";l(d.options,function(a,b){z+='<a href="#" style="font:normal 8pt Verdana,Arial;vertical-align:middle;">'+b+"</a>";a<d.options.length-1&&(z+="<span style='margin:0 4px 0 4px;font:normal 8pt Verdana,Arial;vertical-align:middle;''>/</span>")});p(C,z);r(C,"click",function(a){var c=a.target?a.target:a.srcElement;if(c&&c.nodeName==="A")a.preventDefault&&typeof a.preventDefault=="function"?a.preventDefault():a.returnValue=!1,a=(c.innerText||c.textContent).replace(/^\s+|\s+$/g,""),(new Image).src=
d.endpoint+"?"+ba({e:"feedback",i:b.className,l:d.id,a:d.ad.adId,c:d.ad.creativeId,r:a}),p(C,'<span style="position:relative;top:2px">Thank you for your feedback.</span>')});k="Ad"}var x=v("a",0,{position:f?"relative":"absolute",top:f?0:"2px",right:f?j:"0px",display:"inline-block",font:"normal 11px Arial",color:"#0066C0",cursor:"pointer"},u);h?p(x,(f?H:k+" ")+T):p(x,f?H:k+" ");r(x,"click",function(){n&&(s=="T1"||s=="T2")?U(c,a,u,s):M(c)});e=function(b){n&&(s=="T3"||s=="T4")?U(c,a,u,s):(b=/r/.test(b.type),
w(x,{color:b?"#e47911":"#004b91",textDecoration:b?"underline":"none"}),w(o("b",x)[0],{backgroundPosition:b?t:"0 0"}))};r(x,"mouseover",e);r(x,"mouseout",e);n||e({})}k=a.contentWindow;e=k.document;f=typeof c.isSafeframeGoldbox!=="undefined"?c.isSafeframeGoldbox:k.isGoldBox||"showGoldBoxSlug"in k;c.b||l(o("img",e),function(a,b){b&&/sm-head/.test(b.src)&&G(g(b).parentNode)});f&&(w(b,{textAlign:"center"}),w(u,{margin:"0 auto",width:"900px"}))},U=function(a,b,c,e){b=b.contentWindow;inlineFeedback=b.inlineFeedback||
{};inlineFeedback.question=a.ifp.qt&&typeof a.ifp.qt==="string"?a.ifp.qt:"Is this ad appropriate?";inlineFeedback.options=inlineFeedback.options&&typeof inlineFeedback.options==="object"&&inlineFeedback.options.length?inlineFeedback.options:Q;inlineFeedback.ad=b.aanResponse||{};p(c,"");var f=v("div",0,{top:"1px",font:"normal 12px Arial",display:"inline-block",verticalAlign:"middle"},c),d="",h="",i="margin-right:5px;",n="margin-right:5px;",s="",q="&nbsp;&nbsp;";if(a&&a.a&&a.a.slot&&a.a.slot.indexOf("auto-left-advertising")!=
-1||a&&a.h&&a.w&&a.h==600&&a.w==160)d="<br>",s="margin-top:5px;",h="margin-top:2px;",i="margin-right:3px;",n="margin-right:10px;",q="<br>";var k="";k+='<label style="font:normal 12px Arial;vertical-align:middle;margin-right:5px;display:inline-block">'+inlineFeedback.question+"</label>"+d;l(inlineFeedback.options,function(a,b){k+=e=="T1"||e=="T3"?'&nbsp<input type="button" name="ad-feedback-'+b+'" value="'+b+'" style="font:normal 11px Arial; margin-bottom:0;vertical-align:middle;'+h+'margin-right:5px">':
'<input type="radio" name="ad-feedback-option" value="'+b+'" style="font:normal 11px Arial; margin-bottom:0;vertical-align:middle;'+i+'margin-top:2px"><label style="font:normal 11px Arial; margin-bottom:0;vertical-align:middle;'+s+n+' display:inline-block">'+b+"</label>"});p(f,k);var d=L(a.a),g={impressionId:d.arid,pagetype:d.pt,pagesubtype:"",slot:d.slot,adId:inlineFeedback.ad.adId,adNet:inlineFeedback.ad.adNetwork,cid:inlineFeedback.ad.creativeId,hostName:b.location.hostname,userAction:"widgetOpened"};
g.treatmentType=a.ifp.wid+"-"+e;I(g);r(f,"click",function(b){var d=b.target?b.target:b.srcElement;if(d&&d.nodeName==="INPUT"){b="";a.ifp.at=d.value;p(c,"");d=v("div",0,{position:"absolute",top:"1px",left:0,font:"normal 12px Arial",display:"inline-block",verticalAlign:"middle"},c);b+='<span style="position:relative">Thank you for your feedback.</span>'+q;p(d,b);b=v("a",0,{font:"normal 12px Arial",cursor:"pointer"},d);p(b,"Leave a comment");g.userAction="widgetSubmitted";g.questionGroupId="2";if(a.ifp.qid)g[a.ifp.qid]=
a.ifp.at;I(g);r(b,"click",function(){g.treatmentType=a.ifp.wid+"-"+e+"; Comment link hit";g.userAction="widgetOpened";I(g);M(a)})}})},V=function(a){try{aa(function(){S(a)},a.contentWindow)}catch(b){}};h.d16g_adjustExistingIframe=V;h.d16g_addFeedbackLink=R;(function(){l(o("iframe"),function(a,b){/^DA/.test(b.id)&&V(b)})})();var W=function(a){var b=a.i,c=a.a=L(a.a),e=c.slot,f=a.u,d=a.w=a.w||300,j=a.h=a.h||250,i=a.d||0,n=a.o,s=a.b,q=E!="https:"||F!=6,q=a.n&&q&&!K(h),k=a.x?a.x.replace(/^[a-z]+:/,E):"/aan/2009-09-09/static/amazon/iframeproxy-39.html",
l=a.p,m=a.k,t="DA"+e.replace(/([a-z])[a-z]+(-|$)/g,"$1"),y=g(t),w=a.v,u=a.j,C=a.xu,e=a.xt,z=function(){return a.r&&uDA&&ue.sc[t]&&ue.sc[t].wb==1},x=function(a){try{var b=a=="ld"?uex:uet;z()&&b(a,t,{wb:1})}catch(c){}};if(y&&!o("iframe",y)[0]&&(y.ad=a,!i||ha(a,y,i))){try{if(n&&localStorage[t+"_t"]>(new Date).getTime()){G(y);return}}catch(B){}s?i=f:(i=k+"#zus&cb"+t+"&i"+t+(z()?"&r1":"")+(w?"&v1":"")+(u?"&j1":""),h["d16g_dclick_"+t]=f);var A=function(a,b,c,d,e,f){e&&x("af");var i=v("iframe",{src:f?"":
a,width:b,height:c,id:d||"",title:e||"",frameBorder:0,marginHeight:0,marginWidth:0,allowTransparency:"true",scrolling:"no"},0,y);if(e){var g=!1;r(i,"load",function(){g||(g=!0,S(i))})}e&&f&&setTimeout(function(){F?i.src=a:i.contentWindow.location.replace(a)},5)};g(y).childNodes[0]&&p(y,"");f=/%/.test(d)?"":D.ceil(D.random()*3);A(i,d+f,j,"DA"+b+"i","Ad feedback",q);(l||m)&&setTimeout(function(){var a=(new Date).getTime();l&&A("//s.amazon-adsystem.com/iu3?d=amazon.com&"+l+"&n="+a,0,0);var b=c.pid;if(m&&
b)(new Image).src="//secure-us.imrworldwide.com/cgi-bin/m?ci=amazon-ca&at=view&rt=banner&st=image&ca=amazon&cr="+b+"&pc=1234&r="+a},0);C&&setTimeout(function(){(new Image).src=C},e)}},ha=function(a,b,c){var e=function(a){if(a=g(a)){var b=0,c=0,d=a;do b+=d.offsetLeft,c+=d.offsetTop;while(d=d.offsetParent);a=[b,c,a.clientWidth,a.clientHeight]}else a=[0,0,0,0];a[0]+=a[2]/2;a[1]+=a[3]/2;return a},f=e(b);if(f.join("")=="0000"){var d=function(){W(a)};h.jQuery&&jQuery.searchAjax?jQuery(m).bind("searchajax",
d):(b.T=b.T||9,b.T<1E4&&setTimeout(d,b.T*=2));return!1}var j=!0;l(o("iframe"),function(a,b){if(/^DA/.test(b.id)&&b.width>1&&b.height>1){var d=e(g(b).parentNode),h=D.abs(f[0]-d[0])-(f[2]+d[2])/2,d=D.abs(f[1]-d[1])-(f[3]+d[3])/2;j=j&&h+d>=c}});j||G(b);return j},X=function(a,b){if(isNaN(b.i)){var c;if(b.e){if(h.d16g)c=b.e}else isNaN(b.y)?c=W:j.v2Loaded&&(c=loadErm);if(c)b.i=a,c(b)}};(h.d16g||!j.E)&&(j.v2Loaded||!j.v2)&&function(){l(j,X);j.push=function(a){var b=j.length;X(b,j[b]=a)}}();var Y=function(a){a(m).bind("spATFEvent",
function(){j.splice(0,j.length);a(".ap_popover").remove();h.d16g_originalPageOrd=void 0})};if(typeof P!=="undefined")P.when("A").execute(function(a){Y(a.$)});else if(typeof amznJQ!=="undefined")amznJQ.onReady("jQuery",function(){Y(jQuery)});var ia=["OBJECT","EMBED"],ja=["IFRAME","OBJECT","EMBED"],J=[],Z,B=function(a,b){var c=b.tagName;if(c=="IFRAME"||c=="OBJECT"||c=="EMBED")Z=a.type=="mouseover"?b:0};r(m,"mouseover",B);r(m,"mouseout",B);r(h,"beforeunload",function(){h.d16g_originalPageOrd=void 0;
h.aaxPixelFired=void 0;setTimeout(function(){l(ia,function(a,c){var e=o(c);l(e,function(a,b){J.push(b)})});var a=o("IFRAME");l(a,function(a,c){if(/^DA/.test(c.id))try{var e=c.contentWindow.document;l(ja,function(a,b){if(o(b,e).length)throw null;})}catch(f){J.push(c)}});l(J,function(a,c){if(c&&c!==Z)if(c.tagName=="IFRAME"){var e=g(c).parentNode;e&&p(e,"")}else G(c)})},0)})}catch(ka){h.ueLogError&&h.ueLogError(ka,{logLevel:"ERROR",attribution:"Display Advertising - CX",message:"Error in DA.js "})}})(window,
document,Math);