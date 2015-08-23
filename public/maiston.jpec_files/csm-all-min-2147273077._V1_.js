(function(u,x){function p(a){if(a){return a.replace(/^\s+|\s+$/g,"");
}}function y(h,j){if(!h){return{};
}h.m&&h.m.message&&(h=h.m);
var i=j.m||j.message||"",i=h.m&&h.m.message?i+h.m.message:h.m&&h.m.target&&h.m.target.tagName?i+("Error handler invoked by "+h.m.target.tagName+" tag"):h.m?i+h.m:h.message?i+h.message:i+"Unknown error",i={m:i,f:h.f||h.sourceURL||h.fileName||h.filename||h.m&&h.m.target&&h.m.target.src,l:h.l||h.line||h.lineno||h.lineNumber,c:h.c?""+h.c:h.c,s:[],t:u.ue.d(),name:h.name,type:h.type,csm:q+" "+(h.fromOnError?"onerror":"ueLogError")},b,c,a=0,f=0,e;
b=h.stack||(h.err?h.err.stack:"");
i.pageURL=j.pageURL||""+(window.location?window.location.href:"")||"missing";
i.logLevel=j.logLevel||z;
if(c=j.attribution){i.attribution=""+c;
}if(b&&b.split){for(i.csm+=" stack",c=b.split("\n");
a<c.length&&i.s.length<g;
){(b=c[a++])&&i.s.push(p(b));
}}else{for(i.csm+=" callee",c=n(h.args||arguments,"callee"),f=a=0;
c&&a<g;
){e=v,c.skipTrace||(b=c.toString())&&b.substr&&(e=0===f?4*v:e,e=1==f?2*v:e,i.s.push(b.substr(0,e)),f++),c=n(c,"caller"),a++;
}}if(!i.f&&0<i.s.length&&(a=i)&&a.s){var d;
b=0<a.s.length?a.s[0]:"";
c=1<a.s.length?a.s[1]:"";
b&&(d=b.match(r));
d&&3==d.length||!c||(d=c.match(s));
d&&3==d.length&&(a.f=d[1],a.l=d[2]);
}return i;
}function n(a,c){try{return a[c];
}catch(b){}}function w(i,b){if(i){var e=y(i,b);
u.ue.log(e,b.channel||t,{nb:1});
try{var d=x.console,f=x.JSON,c="Error logged: ";
if(d){if(f&&f.stringify){try{c+=f.stringify(e);
}catch(a){c+="no info provided; converting to string failed";
}}else{c+=e.m;
}"function"===typeof d.error?d.error(c,e):"function"===typeof d.log&&d.log(c,e);
}}catch(h){}}}function m(a,c){if(a&&!(u.ue_err.ec>u.ue_err.mxe)){u.ue_err.ec++;
u.ue_err.ter.push(a);
c=c||{};
var b=a.logLevel||c.logLevel;
c.logLevel=b;
c.attribution=a.attribution||c.attribution;
b&&b!=z||ue_err.ecf++;
w(a,c);
}}if(!u.ueLogError||u.ueLogError.isStub){var t=u.ue_err_chan||"jserr",z="FATAL",q="v5",g=20,v=256,s=/\(?([^\s]*):(\d+):\d+\)?/,r=/.*@(.*):(\d*)/;
w.skipTrace=1;
y.skipTrace=1;
m.skipTrace=1;
(function(){if(u.ue_err.erl){var a=u.ue_err.erl.length,c,b;
for(c=0;
c<a;
c++){b=u.ue_err.erl[c],w(b.ex,b.info);
}ue_err.erl=[];
}})();
u.ueLogError=m;
}})(ue_csm,window);
(function(aw,Y,aG){var aF={};
(function(){function f(j){return j<10?"0"+j:j;
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(j){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(j){return this.valueOf();
};
}var g=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,d=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c,h,a={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},b;
function i(j){d.lastIndex=0;
return d.test(j)?'"'+j.replace(d,function(l){var k=a[l];
return typeof k==="string"?k:"\\u"+("0000"+l.charCodeAt(0).toString(16)).slice(-4);
})+'"':'"'+j+'"';
}function e(l,o){var q,r,k,j,n=c,p,m=o[l];
if(m&&typeof m==="object"&&typeof m.toJSON==="function"){m=m.toJSON(l);
}if(typeof b==="function"){m=b.call(o,l,m);
}switch(typeof m){case"string":return i(m);
case"number":return isFinite(m)?String(m):"null";
case"boolean":case"null":return String(m);
case"object":if(!m){return"null";
}c+=h;
p=[];
if(Object.prototype.toString.apply(m)==="[object Array]"){j=m.length;
for(q=0;
q<j;
q+=1){p[q]=e(q,m)||"null";
}k=p.length===0?"[]":c?"[\n"+c+p.join(",\n"+c)+"\n"+n+"]":"["+p.join(",")+"]";
c=n;
return k;
}if(b&&typeof b==="object"){j=b.length;
for(q=0;
q<j;
q+=1){if(typeof b[q]==="string"){r=b[q];
k=e(r,m);
if(k){p.push(i(r)+(c?": ":":")+k);
}}}}else{for(r in m){if(Object.prototype.hasOwnProperty.call(m,r)){k=e(r,m);
if(k){p.push(i(r)+(c?": ":":")+k);
}}}}k=p.length===0?"{}":c?"{\n"+c+p.join(",\n"+c)+"\n"+n+"}":"{"+p.join(",")+"}";
c=n;
return k;
}}if(typeof aF.stringify!=="function"){aF.stringify=function(j,l,k){var m;
c="";
h="";
if(typeof k==="number"){for(m=0;
m<k;
m+=1){h+=" ";
}}else{if(typeof k==="string"){h=k;
}}b=l;
if(l&&typeof l!=="function"&&(typeof l!=="object"||typeof l.length!=="number")){throw new Error("JSON.stringify");
}return e("",{"":j});
};
}}());
var aA=(function(){function b(d,e){if(d==null){return e.push("!n");
}if(typeof d==="number"){return e.push("!"+d);
}if(typeof d==="string"){if(d[d.length-1]=="\\"){return e.push("'"+d.replace(/'/g,"\\'")+"u005C'");
}else{return e.push("'"+d.replace(/'/g,"\\'")+"'");
}}if(typeof d==="boolean"){return e.push(d?"!t":"!f");
}if(d instanceof Array){e.push("*");
for(var f=0;
f<d.length;
f++){b(d[f],e);
}return e.push(")");
}if(typeof d=="object"){e.push("(");
for(var c in d){if(d.hasOwnProperty(c)){e.push(c);
b(d[c],e);
}}return e.push(")");
}return e.push("!n");
}function a(d){var c=[];
b(d,c);
return c.join("");
}return{stringify:a};
})();
var aD=aw.ue_qsl||2000,ag=1000,aq=function(){},R="",S=(Y.JSON&&Y.JSON.stringify)||(aF&&aF.stringify),ah=aA.stringify,ae="ue_frst_v2",ab=aw.ue||{},ax=aw.uet||aq,aB=aw.uet||aq,T=ax("bb",ae,{wb:1}),V="//"+aw.ue_furl+"/1/batch/1/OE/",Z=[],at=[],ap=[],au=false,aI,ac,X=aw.ue_hpfi===undefined?1000:aw.ue_hpfi,az=aw.ue_lpfi===undefined?10000:aw.ue_lpfi,ai={"scheduled-delivery":1},U=0,am=(function(){var h=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
function e(){var i=new XDomainRequest();
i.onerror=aq;
i.ontimeout=aq;
i.onprogress=aq;
i.onload=aq;
i.timeout=0;
return i;
}function g(){var i=new XMLHttpRequest();
if(!("withCredentials" in i)){throw R;
}return i;
}function f(){var k;
for(var j=0;
j<h.length&&!k;
j++){try{k=new ActiveXObject(h[j]);
h=[h[j]];
}catch(i){}}return k;
}function c(){if(Y.XDomainRequest){return e();
}else{if(Y.XMLHttpRequest){return g();
}else{if(Y.ActiveXObject){return f();
}}}}function d(m){var i=[],j=m[0]||{};
for(var l=0;
l<m.length;
l++){var k={};
k[m[l].c]=m[l].d;
i.push(k);
}return{rid:(j.r||ab.rid),sid:(j.s||aw.ue_sid),mid:(j.m||aw.ue_mid),mkt:(j.mkt||aw.ue_mkt),sn:(j.sn||aw.ue_sn),reqs:i};
}function a(k){var i=d(k),j=c();
if(!j){throw R;
}j.open("POST",V,true);
if(j.setRequestHeader){j.setRequestHeader("Content-type","text/plain");
}j.send(S(i));
}function b(j){for(var i in j){if(j.hasOwnProperty(i)&&j[i].length){a(j[i]);
}}}return{send:b,buildPOSTBodyLog:d};
})(),ar=(function(){var f=":",i="$",l="&",h="=",a=",",b=":",d=":",k=":",o="_";
function c(q){var s={},r;
for(var p=0;
p<q.length;
p++){r=q[p].c;
if(!s[r]){s[r]=[];
}s[r].push(q[p]);
}return s;
}function m(q){var r=[];
for(var p in q){if(q.hasOwnProperty(p)){for(var u=0;
u<q[p].length;
u++){var t=q[p][u],s=encodeURIComponent((t.cs?ah:S)(t.d));
r.push({l:s,t:t.t,p:1,c:p,d:(t.cs?"c":"j")});
}}}return r;
}function g(q,p){var r=aD-p,s=(q.l.match(".{1,"+r+"}[^%]{0,2}")||[])[0]||"";
q.l=q.l.substr(s.length);
return s;
}function j(r){for(var q=0;
q<r.length;
q++){var p=new Image();
p.src=r[q];
}}function n(B){var r=c(B),t=B[0]||{},C=(t.r||ab.rid),w=(t.s||aw.ue_sid),p=(t.m||aw.ue_mid),E=(t.sn||aw.ue_sn),D=V+p+f+w+f+C+(E?(f+E):""),u=[],q=D,v=m(r),s,y=i,z;
for(var x=0;
x<v.length;
){z=v[x];
if(s!=z.c){q+=y+z.c+h;
y=l;
s=z.c;
}else{q+=a;
}q+=z.d+d+g(z,q.length)+b+z.t;
if(!z.l){x++;
if(z.p!=1){q+=k+z.p+o+z.p;
for(var A=0;
A<z.p-1;
A++){u[u.length-A-1]+=z.p;
}}}else{q+=k+(z.p++)+o;
u.push(q);
q=D;
y=i;
s=0;
}}u.push(q);
j(u);
}function e(q){for(var p in q){if(q.hasOwnProperty(p)){n(q[p]);
}}}return{send:e};
})(),an=(function(){function a(d){var c=am.buildPOSTBodyLog(d);
if(!navigator.sendBeacon(V,S(c))){throw R;
}}function b(d){if(!navigator.sendBeacon){throw R;
}for(var c in d){if(d.hasOwnProperty(c)){a(d[c]);
}}}return{send:b};
})();
function av(e){var a={},b,c;
for(var d=0;
d<e.length;
d++){c=e[d];
b=c.r+c.s+c.m;
if(!c.c){continue;
}if(!a[b]){a[b]=[];
}a[b].push(e[d]);
}return a;
}function ak(c){for(var b=1;
b<arguments.length;
b++){try{return arguments[b].send(c);
}catch(a){}}}function ay(){for(var a=0;
a<ap.length;
a++){ap[a]();
}if(Z.length){ak(av(Z.splice(0,Z.length)),an,am,ar);
}ac=0;
aI=0;
}function aH(){if(X===0){ay();
}else{if(!aI){aI=Y.setTimeout(ay,X);
}}}function ao(){if(!ac){ac=Y.setTimeout(ay,az);
}}function aE(a,b,d){d=d||{};
if(d.bf===0&&ab.isBF){return;
}var c={r:d.r||ab.rid,s:d.s||aw.ue_sid,m:d.m||aw.ue_mid,mkt:d.mkt||aw.ue_mkt,sn:d.sn||aw.ue_sn,c:b,d:a,t:(d.t||ab.d()),cs:d.c&&aw.ue_qsl};
if(d.b){ak(av([c]),an,ar);
}else{if(d.nb){ak(av([c]),an,am,ar);
}else{if(d.img||ai[b]){ak(av([c]),ar);
}else{if(d.n){Z.push(c);
aH();
}else{Z.push(c);
ao();
}}}}}function al(a,b,c){U++;
if(U==ag){aE({m:"Max number of Forester Logs exceeded",f:"forester-client.js",logLevel:"ERROR"},Y.ue_err_chan||"jserr");
}else{if(U<ag){aE(a,b,c);
}}}function aC(){if(!ab.log||!ab.log.isStub){return;
}ab.log.replay(function(c,a,b){var d=c[2]||{};
d.t=a;
d.r=b;
al(c[0],c[1],d);
});
ab.onunload.replay(function(a){at.push(a[0]);
});
ab.onflush.replay(function(a){ap.push(a[0]);
});
}function W(){if(au){return;
}for(var a=0;
a<at.length;
a++){at[a]();
}for(var a=0;
a<ap.length;
a++){ap[a]();
}ak(av(Z.splice(0,Z.length)),an,ar);
au=true;
}function ad(a){at.push(a);
}function aj(a){ap.push(a);
}function aa(){U=0;
}function af(){var b=Y.performance||Y.webkitPerformance,c=b&&b.navigation&&b.navigation.type===2,d=aG.ue_backdetect&&aG.ue_backdetect.ue_back&&document.ue_backdetect.ue_back.value,a=ab.bfini;
return c||(a>1)||(!a&&(d>1));
}ab._fic=ar;
ab._fac=am;
ab._fbc=an;
ab._flq=Z;
ab.sid=aw.ue_sid;
ab.mid=aw.ue_mid;
ab.furl=aw.ue_furl;
ab.sn=aw.ue_sn;
ab.isBF=af();
if(Y.amznJQ&&Y.amznJQ.declareAvailable){Y.amznJQ.declareAvailable("forester-client");
}if(Y.P&&Y.P.register){Y.P.register("forester-client",aq);
}aC();
ab.log=al;
ab.log.reset=aa;
ab.onunload=ad;
ab.onflush=aj;
ab.attach("beforeunload",W);
ab.attach("pagehide",W);
aB("ld",ae,{wb:1});
})(ue_csm,window,document);
(function(c,d){if(c.ue_cel){return;
}c.ue_cel=(function(){var b=600000,w=[],u=[],A="csmCELLSframework",x="cel",t,a=c.ue,y=c.uet,B=c.uex,z=a.rid,r=d.requestAnimationFrame||function(e){e();
};
function v(e,f){if(f){f.r=z;
}else{f={r:z,c:1};
}if(f.clog&&a.clog){a.clog(e,x,f);
}else{a.log(e,x,f);
}}if(a.isBF){v({k:"bft",t:a.d()});
return;
}if(typeof y=="function"){y("bb",A,{wb:1});
}function s(){var h=w.length;
if(h>0){var g=[];
for(var e=0;
e<h;
e++){var f=w[e].api;
if(f.ready()){f.on({ts:a.d,ns:x});
u.push(w[e]);
v({k:"mso",n:w[e].name,t:a.d()});
}else{g.push(w[e]);
}}w=g;
}}setTimeout(s,0);
function q(){if(!q.executed){for(var e=0;
e<u.length;
e++){if(u[e].api.off){u[e].api.off({ts:a.d,ns:x});
}}v({k:"eod",t0:a.t0,t:a.d()},{c:1});
q.executed=1;
for(var f=0;
f<u.length;
f++){w.push(u[f]);
}u=[];
clearTimeout(t);
}}a.onunload(q);
t=setTimeout(q,b);
if(typeof B=="function"){B("ld",A,{wb:1});
}return{registerModule:function(f,e){w.push({name:f,api:e});
v({k:"mrg",n:f,t:a.d()});
s();
},reset:function(f){v({k:"rst",t0:a.t0,t:a.d()});
z=f||a.rid;
w=w.concat(u);
u=[];
var g=w.length;
for(var e=0;
e<g;
e++){w[e].api.off();
w[e].api.reset();
}s();
clearTimeout(t);
t=setTimeout(q,b);
q.executed=0;
},timeout:function(e,f){return d.setTimeout(function(){r(e);
},f);
},log:v};
})();
})(ue_csm,window);
(function(e,f,d){if(e.ue_pdm){return;
}if(ue.isBF){return;
}e.ue_pdm=(function(){var G,H,b,u,x,z,C="csmCELLSpdm",A,w=0,c=0,a=e.ue,y=e.ue_cel.log,B=e.uet,D=e.uex;
if(typeof B=="function"){B("bb",C,{wb:1});
}function E(){var g={w:G.width,aw:G.availWidth,h:G.height,ah:G.availHeight,cd:G.colorDepth,pd:G.pixelDepth};
var h={w:d.body.scrollWidth,h:d.body.scrollHeight};
if(!x||x.w!=g.w||x.h!=g.h||x.aw!=g.aw||x.ah!=g.ah||x.pd!=g.pd||x.cd!=g.cd){x=g;
x.t=b();
x.k="sci";
y(x);
}if(!z||z.w!=h.w||z.h!=h.h){z=h;
z.t=b();
z.k="doi";
y(z);
}H=e.ue_cel.timeout(E,u);
}function F(){y({k:"ebl",t:b()});
}function v(){y({k:"efo",t:b()});
}return{on:function(g){u=g.timespan||500;
b=g.ts;
A=g.ns;
G=f.screen;
if(a.attach){a.attach("blur",F,f);
a.attach("focus",v,f);
}e.ue_cel.timeout(E,0);
if(typeof D=="function"){D("ld",C,{wb:1});
}},off:function(g){clearTimeout(H);
if(a.detach){a.detach("blur",F,f);
a.detach("focus",v,f);
}if(a.count){a.count("cel.PDM.TotalExecutions",c);
a.count("cel.PDM.TotalExecutionTime",w);
a.count("cel.PDM.AverageExecutionTime",w/c);
}},ready:function(){return d.body&&e.ue_cel&&e.ue_cel.log;
},reset:function(){z=null;
x=null;
}};
})();
if(e.ue_cel){e.ue_cel.registerModule("page module",e.ue_pdm);
}})(ue_csm,window,document);
(function(d,c){if(d.ue_vpm){return;
}if(ue.isBF){return;
}d.ue_vpm=(function(){var D,J,F,x,G="csmCELLSvpm",E,v=0,a=0,z=d.ue,H=d.ue_cel.log,A=d.uet,C=d.uex,y=z.attach,u=z.detach;
if(typeof A=="function"){A("bb",G,{wb:1});
}function I(){var e=x(),f={w:c.innerWidth,h:c.innerHeight,x:c.pageXOffset,y:c.pageYOffset};
if(!D||D.w!=f.w||D.h!=f.h||D.x!=f.x||D.y!=f.y){f.t=e;
f.k="vpi";
D=f;
H(D,{clog:1});
}J=0;
v=x()-e;
a+=1;
}function B(){if(J){return;
}J=d.ue_cel.timeout(I,F);
}function w(){if(y){y("scroll",B);
y("resize",B);
}}function b(){if(u){u("scroll",B);
u("resize",B);
}}return{on:function(e){x=e.ts;
E=e.ns;
F=e.timespan||100;
d.ue_cel.timeout(I,0);
w();
if(typeof C=="function"){C("ld",G,{wb:1});
}},off:function(e){clearTimeout(J);
b();
if(z.count){z.count("cel.VPI.TotalExecutions",a);
z.count("cel.VPI.TotalExecutionTime",v);
z.count("cel.VPI.AverageExecutionTime",v/a);
}},ready:function(){return d.ue_cel&&d.ue_cel.log;
},reset:function(){D=undefined;
},getVpi:function(){return D;
}};
})();
if(d.ue_cel){d.ue_cel.registerModule("viewport module",d.ue_vpm);
}})(ue_csm,window);
(function(j,h,i){var f=j.ue||{};
function g(){return !f.isBF&&!j.ue_fem&&i.querySelector&&h.getComputedStyle&&[].forEach;
}if(!g()){return;
}j.ue_fem=(function(){var ad=50,b=10,aF=3000,aa,ar="csmCELLSfem",aG=[],Z=function(){},ae=[],az=j.ue_cel.log,al,av,au,c,ak=h.MutationObserver||h.WebKitMutationObserver||h.MozMutationObserver,aC=!!ak,W,aw,d="DOMAttrModified",an="DOMNodeInserted",Y="DOMNodeRemoved",e,ab,ap=-aF;
if(typeof uet=="function"){uet("bb",ar,{wb:1});
}function aA(){j.ue_cel.timeout(function(){ae.splice(0).forEach(function(k){az(k,{clog:1});
});
},0);
}function ao(k,l){ae.push({n:k.cel_n,t:l,k:"ewd"});
}function a(k,l){ae.push({n:k.cel_n,w:k.cel_b.w,h:k.cel_b.h,d:k.cel_b.d,x:k.cel_b.x,y:k.cel_b.y,t:l,k:"ewi",cl:k.className});
}function ay(k,l){ae.push({n:k.cel_n,w:k.cel_b.w,h:k.cel_b.h,d:k.cel_b.d,x:k.cel_b.x,y:k.cel_b.y,t:l,k:"ewi"});
}function at(l){var o={x:h.pageXOffset,y:h.pageYOffset};
for(var p=0;
p<aG.length;
p++){var k=aG[p];
if(!k.w||!k.w.length){continue;
}for(var n=0;
n<k.w.length;
n++){var m=k.w[n],q=aD(m,o);
if(q&&!m.cel_b){m.cel_b=q;
a(m,l);
}else{if(q&&ac(m.cel_b,q)){m.cel_b=q;
ay(m,l);
}}}}}function aH(k){if(k.c){return i.getElementsByClassName(k.c);
}if(k.id){return[i.getElementById(k.id)];
}return i.querySelectorAll(k.s);
}function ah(l){for(var r=0;
r<aG.length;
r++){var k=aG[r],q=aH(k),n=(k.w||[]),p;
for(p=0;
p<n.length;
p++){var m=n[p];
if(!al.contains(m)){ao(m,l);
}}k.w=[];
for(p=0;
p<q.length;
p++){var o=q[p];
if(!o){continue;
}if(!o.cel_n){o.cel_n=o.getAttribute("cel_widget_id")||(k.id_gen||Z)(o,p)||o.id;
}k.w.push(o);
}}aI();
}function aD(l,m){try{return aj(l,m);
}catch(k){}}function aj(l,m){if(!l){return;
}var k=l.getBoundingClientRect();
return{x:(k.left+m.x)|0,y:(k.top+m.y)|0,w:k.width|0,h:k.height|0,d:(l.offsetWidth===0&&l.offsetHeight===0)|0};
}function aq(l,k){if(l>k){return l-k<3;
}else{return k-l<3;
}}function ac(l,k){if(k.d===l.d&&k.d===1){return false;
}else{return !(aq(l.x,k.x)&&aq(l.y,k.y)&&aq(l.w,k.w)&&aq(l.h,k.h)&&(l.d===k.d));
}}function aE(){if(!ab){ab=j.ue_cel.timeout(function(){ab=null;
ai("dwe",ah);
aA();
},ad);
}}function aI(){if(!ab&&!e){e=j.ue_cel.timeout(function(){e=null;
ai("dwpc",at);
aA();
},ad);
}}function ax(l,k){if(l<=b){return 0;
}if((k-ap)>=aF){ap=k;
return 0;
}ue_fem.off();
return 1;
}function ai(p,l){var n=aa();
l(n);
var k=aa(),m=k-n,o=ax(m,k);
if(ae.length||o){ae.push({k:"ewt",e:p,d:m,ex:o,t:aa()});
}}function ag(){var l={attributes:true,subtree:true},k={childList:true};
W=new ak(aI);
aw=new ak(aE);
W.observe(al,l);
aw.observe(al,k);
aw.observe(av,l);
}function af(){au.call(al,d,aI);
au.call(al,an,aE);
au.call(al,Y,aE);
au.call(av,an,aI);
au.call(av,Y,aI);
}function X(){if(aC){ag();
}else{af();
}}function aB(){if(aw){aw.disconnect();
aw=null;
}if(W){W.disconnect();
W=null;
}c.call(al,d,aI);
c.call(al,an,aE);
c.call(al,Y,aE);
c.call(av,an,aI);
c.call(av,Y,aI);
}function am(){return au&&c&&al&&al.contains&&al.getBoundingClientRect&&aa;
}return{on:function(k){al=i.body;
av=i.head;
au=al.addEventListener;
c=al.removeEventListener;
aa=k.ts;
aG=j.cel_widgets||[];
function l(){if(am()){X();
aE();
}}if(f.deffered){l();
}else{if(f.attach){f.attach("load",l);
}}if(typeof uex=="function"){uex("ld",ar,{wb:1});
}},off:function(){if(am()){aB();
}},ready:function(){return j.ue_cel&&j.ue_cel.log;
},reset:function(){aG=j.cel_widgets||[];
}};
})();
if(j.ue_cel&&j.ue_fem){j.ue_cel.registerModule("features module",j.ue_fem);
}})(ue_csm,window,document);
