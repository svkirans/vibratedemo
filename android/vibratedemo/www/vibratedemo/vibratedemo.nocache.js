function vibratedemo(){var O='bootstrap',P='begin',Q='gwt.codesvr.vibratedemo=',R='gwt.codesvr=',S='vibratedemo',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='javascript:""',Z='position:absolute; width:0; height:0; border:none; left: -1000px;',$=' top: -1000px;',_='CSS1Compat',ab='<!doctype html>',bb='',cb='<html><head><\/head><body><\/body><\/html>',db='undefined',eb='DOMContentLoaded',fb=50,gb='Chrome',hb='eval("',ib='");',jb='script',kb='javascript',lb='moduleStartup',mb='moduleRequested',nb='Failed to load ',ob='head',pb='meta',qb='name',rb='vibratedemo::',sb='::',tb='gwt:property',ub='content',vb='=',wb='gwt:onPropertyErrorFn',xb='Bad handler "',yb='" for "gwt:onPropertyErrorFn"',zb='gwt:onLoadErrorFn',Ab='" for "gwt:onLoadErrorFn"',Bb='#',Cb='?',Db='/',Eb='img',Fb='clear.cache.gif',Gb='baseUrl',Hb='vibratedemo.nocache.js',Ib='base',Jb='//',Kb='mgwt.density',Lb='mid',Mb=1.5,Nb='xhigh',Ob='high',Pb=2,Qb='mgwt.formfactor',Rb='formfactor',Sb='&',Tb='iphone',Ub='ipod',Vb='phone',Wb='ipad',Xb='tablet',Yb='android',Zb='mobile',$b='desktop',_b='phonegap.env',ac='blackberry',bc='file://',cc='local://',dc='yes',ec='no',fc='user.agent',gc='webkit',hc='safari',ic='msie',jc=10,kc=11,lc='ie10',mc=9,nc='ie9',oc=8,pc='ie8',qc='gecko',rc='gecko1_8',sc=3,tc=4,uc='selectingPermutation',vc='vibratedemo.devmode.js',wc='042132F3ADEAE7A883D1D288DBE5761D',xc=':1',yc=':2',zc='098D5E18613F406098327AEA6997BA73',Ac='1ADE585868A9D59A86E06FCD02275C93',Bc='1FCA513B20A4070B614352FB5FB2A6F8',Cc='3B0577372856FE7737923D6D6E8ECE7B',Dc='3EB2BCC12F789A522D2BFB5E54238D36',Ec='61BE499F3C7EAC0430E2279650376686',Fc='6F6EAC557820434AAB547B0F9E4B2BBF',Gc='73FB294C47D347257E7E720CAF799EDA',Hc='92650E854061080321D75B34AAE8BA5B',Ic='97B31F8B33447D03CE3C908C14940CC4',Jc='A258E26F2931D82F9BF08F97158DAFB6',Kc='AA0B6D1EBBA74BBD66E6ED3000E76EF8',Lc='AD7B8295BAD9EDAFAB39867C0C488E39',Mc='BD8D5BCD9E38407CE50EDEA834396D99',Nc='C3776CE5365FBFDD42786C27A8C72BE5',Oc='C9F6DB260AF8E720C5A7712B336C05FC',Pc='D41F9DE24C6939810A6798EFC3ABCDC4',Qc=':',Rc='.cache.js',Sc='loadExternalRefs',Tc='end',Uc='http:',Vc='file:',Wc='_gwt_dummy_',Xc='__gwtDevModeHook:vibratedemo',Yc='Ignoring non-whitelisted Dev Mode URL: ',Zc=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
vibratedemo.__sendStats=r;vibratedemo.__moduleName=S;vibratedemo.__errFn=null;vibratedemo.__moduleBase=U;vibratedemo.__softPermutationId=V;vibratedemo.__computePropValue=null;vibratedemo.__getPropMap=null;vibratedemo.__installRunAsyncCode=function(){};vibratedemo.__gwtStartLoadingFragment=function(){return null};vibratedemo.__gwt_isKnownPropertyValue=function(){return false};vibratedemo.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};vibratedemo.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[vibratedemo.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.src=Y;a.id=S;a.style.cssText=Z+$;a.tabIndex=-1;p.body.appendChild(a);u=a.contentDocument;if(!u){u=a.contentWindow.document}u.open();var b=document.compatMode==_?ab:bb;u.write(b+cb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==db){return typeof p.body!=db&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener(eb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(eb,d,false)}var e=setInterval(function(){if(b()){d()}},fb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(gb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(hb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(ib));g=e.createElement(jb);g.language=kb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(jb);g.language=kb;g.text=c[i];f.appendChild(g);d(f,g)}}}
vibratedemo.onScriptDownloaded=function(a){l(function(){m(a)})};r(lb,mb);var n=p.createElement(jb);n.src=k;if(vibratedemo.__errFn){n.onerror=function(){vibratedemo.__errFn(S,new Error(nb+code))}}p.getElementsByTagName(ob)[V].appendChild(n)}
vibratedemo.__startLoadingFragment=function(a){return D(a)};vibratedemo.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(jb);d.language=kb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(pb);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(qb),k;if(j){j=j.replace(rb,bb);if(j.indexOf(sb)>=V){continue}if(j==tb){k=i.getAttribute(ub);if(k){var l,m=k.indexOf(vb);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=bb}c[j]=l}}else if(j==wb){k=i.getAttribute(ub);if(k){try{d=eval(k)}catch(a){alert(xb+k+yb)}}}else if(j==zb){k=i.getAttribute(ub);if(k){try{e=eval(k)}catch(a){alert(xb+k+Ab)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;vibratedemo.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Bb);if(b==-1){b=a.length}var c=a.indexOf(Cb);if(c==-1){c=a.length}var d=a.lastIndexOf(Db,Math.min(c,b));return d>=V?a.substring(V,d+W):bb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Eb);b.src=a+Fb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Gb);if(a!=null){return a}return bb}
function h(){var a=p.getElementsByTagName(jb);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Hb)!=-1){return e(a[b].src)}}return bb}
function i(){var a=p.getElementsByTagName(Ib);if(a.length>V){return a[a.length-W].href}return bb}
function j(){var a=p.location;return a.href==a.protocol+Jb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==bb){k=h()}if(k==bb){k=i()}if(k==bb&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return vibratedemo.__moduleBase+a}
function F(){var g=[];var h=V;function i(a,b){var c=g;for(var d=V,e=a.length-W;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var j=[];var k=[];function l(a){var b=k[a](),c=j[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
k[Kb]=function(){if(!window.devicePixelRatio){return Lb}if(window.devicePixelRatio>Mb){return Nb}else if(window.devicePixelRatio>W){return Ob}return Lb};j[Kb]={high:V,mid:W,xhigh:Pb};k[Qb]=function(){var a=location.search;var b=a.indexOf(Rb);if(b>=V){var c=a.substring(b);var d=c.indexOf(vb)+W;var e=c.indexOf(Sb);if(e==-1){e=c.length}return c.substring(d,e)}var f=navigator.userAgent.toLowerCase();if(f.indexOf(Tb)!=-1||f.indexOf(Ub)!=-1){return Vb}else if(f.indexOf(Wb)!=-1){return Xb}else if(f.indexOf(Yb)!=-1){if(f.indexOf(Zb)!=-1){return Vb}else{return Xb}}return $b};j[Qb]={desktop:V,phone:W,tablet:Pb};k[_b]=function(){{var a=window.navigator.userAgent.toLowerCase();if(a.indexOf(Yb)!=-1||(a.indexOf(Wb)!=-1||(a.indexOf(Ub)!=-1||(a.indexOf(Tb)!=-1||a.indexOf(ac)!=-1)))){var b=document.location.href;if(b.indexOf(bc)===V||b.indexOf(cc)===V){return dc}}return ec}};j[_b]={no:V,yes:W};k[fc]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(gc)!=-1}())return hc;if(function(){return a.indexOf(ic)!=-1&&(b>=jc&&b<kc)}())return lc;if(function(){return a.indexOf(ic)!=-1&&(b>=mc&&b<kc)}())return nc;if(function(){return a.indexOf(ic)!=-1&&(b>=oc&&b<kc)}())return pc;if(function(){return a.indexOf(qc)!=-1||b>=kc}())return rc;return bb};j[fc]={gecko1_8:V,ie10:W,ie8:Pb,ie9:sc,safari:tc};__gwt_isKnownPropertyValue=function(a,b){return b in j[a]};vibratedemo.__getPropMap=function(){var a={};for(var b in j){if(j.hasOwnProperty(b)){a[b]=l(b)}}return a};vibratedemo.__computePropValue=l;o.__gwt_activeModules[S].bindings=vibratedemo.__getPropMap;r(O,uc);if(q()){return D(vc)}var m;try{i([Ob,Xb,ec,lc],wc);i([Lb,Xb,ec,lc],wc);i([Nb,Xb,ec,lc],wc);i([Ob,Xb,ec,lc],wc+xc);i([Lb,Xb,ec,lc],wc+xc);i([Nb,Xb,ec,lc],wc+xc);i([Ob,Xb,ec,lc],wc+yc);i([Lb,Xb,ec,lc],wc+yc);i([Nb,Xb,ec,lc],wc+yc);i([Ob,Xb,ec,hc],zc);i([Lb,Xb,ec,hc],zc);i([Nb,Xb,ec,hc],zc);i([Ob,Xb,ec,hc],zc+xc);i([Lb,Xb,ec,hc],zc+xc);i([Nb,Xb,ec,hc],zc+xc);i([Ob,Xb,ec,hc],zc+yc);i([Lb,Xb,ec,hc],zc+yc);i([Nb,Xb,ec,hc],zc+yc);i([Ob,$b,ec,nc],Ac);i([Lb,$b,ec,nc],Ac);i([Nb,$b,ec,nc],Ac);i([Ob,$b,ec,nc],Ac+xc);i([Lb,$b,ec,nc],Ac+xc);i([Nb,$b,ec,nc],Ac+xc);i([Ob,$b,ec,nc],Ac+yc);i([Lb,$b,ec,nc],Ac+yc);i([Nb,$b,ec,nc],Ac+yc);i([Ob,$b,ec,hc],Bc);i([Lb,$b,ec,hc],Bc);i([Nb,$b,ec,hc],Bc);i([Ob,$b,ec,hc],Bc+xc);i([Lb,$b,ec,hc],Bc+xc);i([Nb,$b,ec,hc],Bc+xc);i([Ob,$b,ec,hc],Bc+yc);i([Lb,$b,ec,hc],Bc+yc);i([Nb,$b,ec,hc],Bc+yc);i([Ob,Vb,ec,rc],Cc);i([Lb,Vb,ec,rc],Cc);i([Nb,Vb,ec,rc],Cc);i([Ob,Vb,ec,rc],Cc+xc);i([Lb,Vb,ec,rc],Cc+xc);i([Nb,Vb,ec,rc],Cc+xc);i([Ob,Vb,ec,rc],Cc+yc);i([Lb,Vb,ec,rc],Cc+yc);i([Nb,Vb,ec,rc],Cc+yc);i([Ob,Vb,ec,pc],Dc);i([Lb,Vb,ec,pc],Dc);i([Nb,Vb,ec,pc],Dc);i([Ob,Vb,ec,pc],Dc+xc);i([Lb,Vb,ec,pc],Dc+xc);i([Nb,Vb,ec,pc],Dc+xc);i([Ob,Vb,ec,pc],Dc+yc);i([Lb,Vb,ec,pc],Dc+yc);i([Nb,Vb,ec,pc],Dc+yc);i([Ob,Vb,ec,hc],Ec);i([Lb,Vb,ec,hc],Ec);i([Nb,Vb,ec,hc],Ec);i([Ob,Vb,ec,hc],Ec+xc);i([Lb,Vb,ec,hc],Ec+xc);i([Nb,Vb,ec,hc],Ec+xc);i([Ob,Vb,ec,hc],Ec+yc);i([Lb,Vb,ec,hc],Ec+yc);i([Nb,Vb,ec,hc],Ec+yc);i([Ob,Vb,dc,hc],Fc);i([Lb,Vb,dc,hc],Fc);i([Nb,Vb,dc,hc],Fc);i([Ob,Vb,dc,hc],Fc+xc);i([Lb,Vb,dc,hc],Fc+xc);i([Nb,Vb,dc,hc],Fc+xc);i([Ob,Vb,dc,hc],Fc+yc);i([Lb,Vb,dc,hc],Fc+yc);i([Nb,Vb,dc,hc],Fc+yc);i([Ob,Xb,ec,pc],Gc);i([Lb,Xb,ec,pc],Gc);i([Nb,Xb,ec,pc],Gc);i([Ob,Xb,ec,pc],Gc+xc);i([Lb,Xb,ec,pc],Gc+xc);i([Nb,Xb,ec,pc],Gc+xc);i([Ob,Xb,ec,pc],Gc+yc);i([Lb,Xb,ec,pc],Gc+yc);i([Nb,Xb,ec,pc],Gc+yc);i([Ob,$b,ec,rc],Hc);i([Lb,$b,ec,rc],Hc);i([Nb,$b,ec,rc],Hc);i([Ob,$b,ec,rc],Hc+xc);i([Lb,$b,ec,rc],Hc+xc);i([Nb,$b,ec,rc],Hc+xc);i([Ob,$b,ec,rc],Hc+yc);i([Lb,$b,ec,rc],Hc+yc);i([Nb,$b,ec,rc],Hc+yc);i([Ob,Vb,ec,nc],Ic);i([Lb,Vb,ec,nc],Ic);i([Nb,Vb,ec,nc],Ic);i([Ob,Vb,ec,nc],Ic+xc);i([Lb,Vb,ec,nc],Ic+xc);i([Nb,Vb,ec,nc],Ic+xc);i([Ob,Vb,ec,nc],Ic+yc);i([Lb,Vb,ec,nc],Ic+yc);i([Nb,Vb,ec,nc],Ic+yc);i([Ob,Xb,ec,nc],Jc);i([Lb,Xb,ec,nc],Jc);i([Nb,Xb,ec,nc],Jc);i([Ob,Xb,ec,nc],Jc+xc);i([Lb,Xb,ec,nc],Jc+xc);i([Nb,Xb,ec,nc],Jc+xc);i([Ob,Xb,ec,nc],Jc+yc);i([Lb,Xb,ec,nc],Jc+yc);i([Nb,Xb,ec,nc],Jc+yc);i([Ob,Xb,ec,rc],Kc);i([Lb,Xb,ec,rc],Kc);i([Nb,Xb,ec,rc],Kc);i([Ob,Xb,ec,rc],Kc+xc);i([Lb,Xb,ec,rc],Kc+xc);i([Nb,Xb,ec,rc],Kc+xc);i([Ob,Xb,ec,rc],Kc+yc);i([Lb,Xb,ec,rc],Kc+yc);i([Nb,Xb,ec,rc],Kc+yc);i([Ob,Xb,dc,hc],Lc);i([Lb,Xb,dc,hc],Lc);i([Nb,Xb,dc,hc],Lc);i([Ob,Xb,dc,hc],Lc+xc);i([Lb,Xb,dc,hc],Lc+xc);i([Nb,Xb,dc,hc],Lc+xc);i([Ob,Xb,dc,hc],Lc+yc);i([Lb,Xb,dc,hc],Lc+yc);i([Nb,Xb,dc,hc],Lc+yc);i([Ob,$b,ec,pc],Mc);i([Lb,$b,ec,pc],Mc);i([Nb,$b,ec,pc],Mc);i([Ob,$b,ec,pc],Mc+xc);i([Lb,$b,ec,pc],Mc+xc);i([Nb,$b,ec,pc],Mc+xc);i([Ob,$b,ec,pc],Mc+yc);i([Lb,$b,ec,pc],Mc+yc);i([Nb,$b,ec,pc],Mc+yc);i([Ob,$b,dc,hc],Nc);i([Lb,$b,dc,hc],Nc);i([Nb,$b,dc,hc],Nc);i([Ob,$b,dc,hc],Nc+xc);i([Lb,$b,dc,hc],Nc+xc);i([Nb,$b,dc,hc],Nc+xc);i([Ob,$b,dc,hc],Nc+yc);i([Lb,$b,dc,hc],Nc+yc);i([Nb,$b,dc,hc],Nc+yc);i([Ob,Vb,ec,lc],Oc);i([Lb,Vb,ec,lc],Oc);i([Nb,Vb,ec,lc],Oc);i([Ob,Vb,ec,lc],Oc+xc);i([Lb,Vb,ec,lc],Oc+xc);i([Nb,Vb,ec,lc],Oc+xc);i([Ob,Vb,ec,lc],Oc+yc);i([Lb,Vb,ec,lc],Oc+yc);i([Nb,Vb,ec,lc],Oc+yc);i([Ob,$b,ec,lc],Pc);i([Lb,$b,ec,lc],Pc);i([Nb,$b,ec,lc],Pc);i([Ob,$b,ec,lc],Pc+xc);i([Lb,$b,ec,lc],Pc+xc);i([Nb,$b,ec,lc],Pc+xc);i([Ob,$b,ec,lc],Pc+yc);i([Lb,$b,ec,lc],Pc+yc);i([Nb,$b,ec,lc],Pc+yc);m=g[l(Kb)][l(Qb)][l(_b)][l(fc)];var n=m.indexOf(Qc);if(n!=-1){h=parseInt(m.substring(n+W),jc);m=m.substring(V,n)}}catch(a){}vibratedemo.__softPermutationId=h;return D(m+Rc)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(Sc,P);r(Sc,Tc)}
B();vibratedemo.__moduleBase=C();t[S].moduleBase=vibratedemo.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==Uc||o.location.protocol==Vc);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=Wc;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=Xc;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(Yc+L)}L=bb}if(L&&!o[K]){o[K]=true;o[K+Zc]=C();var M=p.createElement(jb);M.src=L;var N=p.getElementsByTagName(ob)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,Tc);A(H);return true}
vibratedemo.succeeded=vibratedemo();