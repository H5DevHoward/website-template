/*!
 * VERSION: 1.14.1
 * DATE: 2014-10-16
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

(function(e,t){var n=e.GreenSockGlobals=e.GreenSockGlobals||e;if(n.TweenLite)return;var r=function(e){var t=e.split("."),r=n,i;for(i=0;i<t.length;i++)r[t[i]]=r=r[t[i]]||{};return r},i=r("com.greensock"),s=1e-10,o=function(e){var t=[],n=e.length,r;for(r=0;r!==n;t.push(e[r++]));return t},u=function(){},a=function(){var e=Object.prototype.toString,t=e.call([]);return function(n){return n!=null&&(n instanceof Array||typeof n=="object"&&!!n.push&&e.call(n)===t)}}(),f,l,c,h,p,d={},v=function(i,s,o,u){this.sc=d[i]?d[i].sc:[],d[i]=this,this.gsClass=null,this.func=o;var a=[];this.check=function(f){var l=s.length,c=l,h,p,m,g;while(--l>-1)(h=d[s[l]]||new v(s[l],[])).gsClass?(a[l]=h.gsClass,c--):f&&h.sc.push(this);if(c===0&&o){p=("com.greensock."+i).split("."),m=p.pop(),g=r(p.join("."))[m]=this.gsClass=o.apply(o,a),u&&(n[m]=g,typeof define=="function"&&define.amd?define((e.GreenSockAMDPath?e.GreenSockAMDPath+"/":"")+i.split(".").pop(),[],function(){return g}):i===t&&typeof module!="undefined"&&module.exports&&(module.exports=g));for(l=0;l<this.sc.length;l++)this.sc[l].check()}},this.check(!0)},m=e._gsDefine=function(e,t,n,r){return new v(e,t,n,r)},g=i._class=function(e,t,n){return t=t||function(){},m(e,[],function(){return t},n),t};m.globals=n;var y=[0,0,1,1],b=[],w=g("easing.Ease",function(e,t,n,r){this._func=e,this._type=n||0,this._power=r||0,this._params=t?y.concat(t):y},!0),E=w.map={},S=w.register=function(e,t,n,r){var s=t.split(","),o=s.length,u=(n||"easeIn,easeOut,easeInOut").split(","),a,f,l,c;while(--o>-1){f=s[o],a=r?g("easing."+f,null,!0):i.easing[f]||{},l=u.length;while(--l>-1)c=u[l],E[f+"."+c]=E[c+f]=a[c]=e.getRatio?e:e[c]||new e}};c=w.prototype,c._calcEnd=!1,c.getRatio=function(e){if(this._func)return this._params[0]=e,this._func.apply(null,this._params);var t=this._type,n=this._power,r=t===1?1-e:t===2?e:e<.5?e*2:(1-e)*2;return n===1?r*=r:n===2?r*=r*r:n===3?r*=r*r*r:n===4&&(r*=r*r*r*r),t===1?1-r:t===2?r:e<.5?r/2:1-r/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],l=f.length;while(--l>-1)c=f[l]+",Power"+l,S(new w(null,null,1,l),c,"easeOut",!0),S(new w(null,null,2,l),c,"easeIn"+(l===0?",easeNone":"")),S(new w(null,null,3,l),c,"easeInOut");E.linear=i.easing.Linear.easeIn,E.swing=i.easing.Quad.easeInOut;var x=g("events.EventDispatcher",function(e){this._listeners={},this._eventTarget=e||this});c=x.prototype,c.addEventListener=function(e,t,n,r,i){i=i||0;var s=this._listeners[e],o=0,u,a;s==null&&(this._listeners[e]=s=[]),a=s.length;while(--a>-1)u=s[a],u.c===t&&u.s===n?s.splice(a,1):o===0&&u.pr<i&&(o=a+1);s.splice(o,0,{c:t,s:n,up:r,pr:i}),this===h&&!p&&h.wake()},c.removeEventListener=function(e,t){var n=this._listeners[e],r;if(n){r=n.length;while(--r>-1)if(n[r].c===t){n.splice(r,1);return}}},c.dispatchEvent=function(e){var t=this._listeners[e],n,r,i;if(t){n=t.length,r=this._eventTarget;while(--n>-1)i=t[n],i&&(i.up?i.c.call(i.s||r,{type:e,target:r}):i.c.call(i.s||r))}};var T=e.requestAnimationFrame,N=e.cancelAnimationFrame,C=Date.now||function(){return(new Date).getTime()},k=C();f=["ms","moz","webkit","o"],l=f.length;while(--l>-1&&!T)T=e[f[l]+"RequestAnimationFrame"],N=e[f[l]+"CancelAnimationFrame"]||e[f[l]+"CancelRequestAnimationFrame"];g("Ticker",function(e,t){var n=this,r=C(),i=t!==!1&&T,o=500,a=33,f,l,c,d,v,m=function(e){var t=C()-k,i,s;t>o&&(r+=t-a),k+=t,n.time=(k-r)/1e3,i=n.time-v;if(!f||i>0||e===!0)n.frame++,v+=i+(i>=d?.004:d-i),s=!0;e!==!0&&(c=l(m)),s&&n.dispatchEvent("tick")};x.call(n),n.time=n.frame=0,n.tick=function(){m(!0)},n.lagSmoothing=function(e,t){o=e||1/s,a=Math.min(t,o,0)},n.sleep=function(){if(c==null)return;!i||!N?clearTimeout(c):N(c),l=u,c=null,n===h&&(p=!1)},n.wake=function(){c!==null?n.sleep():n.frame>10&&(k=C()-o+5),l=f===0?u:!i||!T?function(e){return setTimeout(e,(v-n.time)*1e3+1|0)}:T,n===h&&(p=!0),m(2)},n.fps=function(e){if(!arguments.length)return f;f=e,d=1/(f||60),v=this.time+d,n.wake()},n.useRAF=function(e){if(!arguments.length)return i;n.sleep(),i=e,n.fps(f)},n.fps(e),setTimeout(function(){i&&(!c||n.frame<5)&&n.useRAF(!1)},1500)}),c=i.Ticker.prototype=new i.events.EventDispatcher,c.constructor=i.Ticker;var L=g("core.Animation",function(e,t){this.vars=t=t||{},this._duration=this._totalDuration=e||0,this._delay=Number(t.delay)||0,this._timeScale=1,this._active=t.immediateRender===!0,this.data=t.data,this._reversed=t.reversed===!0;if(!z)return;p||h.wake();var n=this.vars.useFrames?U:z;n.add(this,n._time),this.vars.paused&&this.paused(!0)});h=L.ticker=new i.Ticker,c=L.prototype,c._dirty=c._gc=c._initted=c._paused=!1,c._totalTime=c._time=0,c._rawPrevTime=-1,c._next=c._last=c._onUpdate=c._timeline=c.timeline=null,c._paused=!1;var A=function(){p&&C()-k>2e3&&h.wake(),setTimeout(A,2e3)};A(),c.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},c.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},c.resume=function(e,t){return e!=null&&this.seek(e,t),this.paused(!1)},c.seek=function(e,t){return this.totalTime(Number(e),t!==!1)},c.restart=function(e,t){return this.reversed(!1).paused(!1).totalTime(e?-this._delay:0,t!==!1,!0)},c.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},c.render=function(e,t,n){},c.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},c.isActive=function(){var e=this._timeline,t=this._startTime,n;return!e||!this._gc&&!this._paused&&e.isActive()&&(n=e.rawTime())>=t&&n<t+this.totalDuration()/this._timeScale},c._enabled=function(e,t){return p||h.wake(),this._gc=!e,this._active=this.isActive(),t!==!0&&(e&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!e&&this.timeline&&this._timeline._remove(this,!0)),!1},c._kill=function(e,t){return this._enabled(!1,!1)},c.kill=function(e,t){return this._kill(e,t),this},c._uncache=function(e){var t=e?this:this.timeline;while(t)t._dirty=!0,t=t.timeline;return this},c._swapSelfInParams=function(e){var t=e.length,n=e.concat();while(--t>-1)e[t]==="{self}"&&(n[t]=this);return n},c.eventCallback=function(e,t,n,r){if((e||"").substr(0,2)==="on"){var i=this.vars;if(arguments.length===1)return i[e];t==null?delete i[e]:(i[e]=t,i[e+"Params"]=a(n)&&n.join("").indexOf("{self}")!==-1?this._swapSelfInParams(n):n,i[e+"Scope"]=r),e==="onUpdate"&&(this._onUpdate=t)}return this},c.delay=function(e){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+e-this._delay),this._delay=e,this):this._delay},c.duration=function(e){return arguments.length?(this._duration=this._totalDuration=e,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&e!==0&&this.totalTime(this._totalTime*(e/this._duration),!0),this):(this._dirty=!1,this._duration)},c.totalDuration=function(e){return this._dirty=!1,arguments.length?this.duration(e):this._totalDuration},c.time=function(e,t){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(e>this._duration?this._duration:e,t)):this._time},c.totalTime=function(e,t,n){p||h.wake();if(!arguments.length)return this._totalTime;if(this._timeline){e<0&&!n&&(e+=this.totalDuration());if(this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var r=this._totalDuration,i=this._timeline;e>r&&!n&&(e=r),this._startTime=(this._paused?this._pauseTime:i._time)-(this._reversed?r-e:e)/this._timeScale,i._dirty||this._uncache(!1);if(i._timeline)while(i._timeline)i._timeline._time!==(i._startTime+i._totalTime)/i._timeScale&&i.totalTime(i._totalTime,!0),i=i._timeline}this._gc&&this._enabled(!0,!1);if(this._totalTime!==e||this._duration===0)this.render(e,t,!1),P.length&&W()}return this},c.progress=c.totalProgress=function(e,t){return arguments.length?this.totalTime(this.duration()*e,t):this._time/this.duration()},c.startTime=function(e){return arguments.length?(e!==this._startTime&&(this._startTime=e,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,e-this._delay)),this):this._startTime},c.endTime=function(e){return this._startTime+(e!=0?this.totalDuration():this.duration())/this._timeScale},c.timeScale=function(e){if(!arguments.length)return this._timeScale;e=e||s;if(this._timeline&&this._timeline.smoothChildTiming){var t=this._pauseTime,n=t||t===0?t:this._timeline.totalTime();this._startTime=n-(n-this._startTime)*this._timeScale/e}return this._timeScale=e,this._uncache(!1)},c.reversed=function(e){return arguments.length?(e!=this._reversed&&(this._reversed=e,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},c.paused=function(e){if(!arguments.length)return this._paused;if(e!=this._paused&&this._timeline){!p&&!e&&h.wake();var t=this._timeline,n=t.rawTime(),r=n-this._pauseTime;!e&&t.smoothChildTiming&&(this._startTime+=r,this._uncache(!1)),this._pauseTime=e?n:null,this._paused=e,this._active=this.isActive(),!e&&r!==0&&this._initted&&this.duration()&&this.render(t.smoothChildTiming?this._totalTime:(n-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!e&&this._enabled(!0,!1),this};var O=g("core.SimpleTimeline",function(e){L.call(this,0,e),this.autoRemoveChildren=this.smoothChildTiming=!0});c=O.prototype=new L,c.constructor=O,c.kill()._gc=!1,c._first=c._last=c._recent=null,c._sortChildren=!1,c.add=c.insert=function(e,t,n,r){var i,s;e._startTime=Number(t||0)+e._delay,e._paused&&this!==e._timeline&&(e._pauseTime=e._startTime+(this.rawTime()-e._startTime)/e._timeScale),e.timeline&&e.timeline._remove(e,!0),e.timeline=e._timeline=this,e._gc&&e._enabled(!0,!0),i=this._last;if(this._sortChildren){s=e._startTime;while(i&&i._startTime>s)i=i._prev}return i?(e._next=i._next,i._next=e):(e._next=this._first,this._first=e),e._next?e._next._prev=e:this._last=e,e._prev=i,this._recent=e,this._timeline&&this._uncache(!0),this},c._remove=function(e,t){return e.timeline===this&&(t||e._enabled(!1,!0),e._prev?e._prev._next=e._next:this._first===e&&(this._first=e._next),e._next?e._next._prev=e._prev:this._last===e&&(this._last=e._prev),e._next=e._prev=e.timeline=null,e===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},c.render=function(e,t,n){var r=this._first,i;this._totalTime=this._time=this._rawPrevTime=e;while(r){i=r._next;if(r._active||e>=r._startTime&&!r._paused)r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(e-r._startTime)*r._timeScale,t,n):r.render((e-r._startTime)*r._timeScale,t,n);r=i}},c.rawTime=function(){return p||h.wake(),this._totalTime};var M=g("TweenLite",function(t,n,r){L.call(this,n,r),this.render=M.prototype.render;if(t==null)throw"Cannot tween a null target.";this.target=t=typeof t!="string"?t:M.selector(t)||t;var i=t.jquery||t.length&&t!==e&&t[0]&&(t[0]===e||t[0].nodeType&&t[0].style&&!t.nodeType),u=this.vars.overwrite,f,l,c;this._overwrite=u=u==null?R[M.defaultOverwrite]:typeof u=="number"?u>>0:R[u];if((i||t instanceof Array||t.push&&a(t))&&typeof t[0]!="number"){this._targets=c=o(t),this._propLookup=[],this._siblings=[];for(f=0;f<c.length;f++){l=c[f];if(!l){c.splice(f--,1);continue}if(typeof l=="string"){l=c[f--]=M.selector(l),typeof l=="string"&&c.splice(f+1,1);continue}if(l.length&&l!==e&&l[0]&&(l[0]===e||l[0].nodeType&&l[0].style&&!l.nodeType)){c.splice(f--,1),this._targets=c=c.concat(o(l));continue}this._siblings[f]=X(l,this,!1),u===1&&this._siblings[f].length>1&&$(l,this,null,1,this._siblings[f])}}else this._propLookup={},this._siblings=X(t,this,!1),u===1&&this._siblings.length>1&&$(t,this,null,1,this._siblings);if(this.vars.immediateRender||n===0&&this._delay===0&&this.vars.immediateRender!==!1)this._time=-s,this.render(-this._delay)},!0),_=function(t){return t&&t.length&&t!==e&&t[0]&&(t[0]===e||t[0].nodeType&&t[0].style&&!t.nodeType)},D=function(e,t){var n={},r;for(r in e)!q[r]&&(!(r in t)||r==="transform"||r==="x"||r==="y"||r==="width"||r==="height"||r==="className"||r==="border")&&(!j[r]||j[r]&&j[r]._autoCSS)&&(n[r]=e[r],delete e[r]);e.css=n};c=M.prototype=new L,c.constructor=M,c.kill()._gc=!1,c.ratio=0,c._firstPT=c._targets=c._overwrittenProps=c._startAt=null,c._notifyPluginsOfEnabled=c._lazy=!1,M.version="1.14.1",M.defaultEase=c._ease=new w(null,null,1,1),M.defaultOverwrite="auto",M.ticker=h,M.autoSleep=!0,M.lagSmoothing=function(e,t){h.lagSmoothing(e,t)},M.selector=e.$||e.jQuery||function(t){var n=e.$||e.jQuery;return n?(M.selector=n,n(t)):typeof document=="undefined"?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById(t.charAt(0)==="#"?t.substr(1):t)};var P=[],H={},B=M._internals={isArray:a,isSelector:_,lazyTweens:P},j=M._plugins={},F=B.tweenLookup={},I=0,q=B.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},R={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},U=L._rootFramesTimeline=new O,z=L._rootTimeline=new O,W=B.lazyRender=function(){var e=P.length,t;H={};while(--e>-1)t=P[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);P.length=0};z._startTime=h.time,U._startTime=h.frame,z._active=U._active=!0,setTimeout(W,1),L._updateRoot=M.render=function(){var e,t,n;P.length&&W(),z.render((h.time-z._startTime)*z._timeScale,!1,!1),U.render((h.frame-U._startTime)*U._timeScale,!1,!1),P.length&&W();if(!(h.frame%120)){for(n in F){t=F[n].tweens,e=t.length;while(--e>-1)t[e]._gc&&t.splice(e,1);t.length===0&&delete F[n]}n=z._first;if(!n||n._paused)if(M.autoSleep&&!U._first&&h._listeners.tick.length===1){while(n&&n._paused)n=n._next;n||h.sleep()}}},h.addEventListener("tick",L._updateRoot);var X=function(e,t,n){var r=e._gsTweenID,i,s;F[r||(e._gsTweenID=r="t"+I++)]||(F[r]={target:e,tweens:[]});if(t){i=F[r].tweens,i[s=i.length]=t;if(n)while(--s>-1)i[s]===t&&i.splice(s,1)}return F[r].tweens},V=function(e,t,n,r){var i=e.vars.onOverwrite;i&&i(e,t,n,r),i=M.onOverwrite,i&&i(e,t,n,r)},$=function(e,t,n,r,i){var o,u,a,f;if(r===1||r>=4){f=i.length;for(o=0;o<f;o++)if((a=i[o])!==t)a._gc||(a._enabled(!1,!1)&&(u=!0),V(a,t));else if(r===5)break;return u}var l=t._startTime+s,c=[],h=0,p=t._duration===0,d;o=i.length;while(--o>-1)(a=i[o])!==t&&!a._gc&&!a._paused&&(a._timeline!==t._timeline?(d=d||J(t,0,p),J(a,d,p)===0&&(c[h++]=a)):a._startTime<=l&&a._startTime+a.totalDuration()/a._timeScale>l&&((p||!a._initted)&&l-a._startTime<=2e-10||(c[h++]=a)));o=h;while(--o>-1){a=c[o],r===2&&a._kill(n,e,t)&&(u=!0);if(r!==2||!a._firstPT&&a._initted)a._enabled(!1,!1)&&(u=!0),r!==2&&V(a,t)}return u},J=function(e,t,n){var r=e._timeline,i=r._timeScale,o=e._startTime;while(r._timeline){o+=r._startTime,i*=r._timeScale;if(r._paused)return-100;r=r._timeline}return o/=i,o>t?o-t:n&&o===t||!e._initted&&o-t<2*s?s:(o+=e.totalDuration()/e._timeScale/i)>t+s?0:o-t-s};c._init=function(){var e=this.vars,t=this._overwrittenProps,n=this._duration,r=!!e.immediateRender,i=e.ease,s,o,u,a,f;if(e.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),f={};for(a in e.startAt)f[a]=e.startAt[a];f.overwrite=!1,f.immediateRender=!0,f.lazy=r&&e.lazy!==!1,f.startAt=f.delay=null,this._startAt=M.to(this.target,0,f);if(r)if(this._time>0)this._startAt=null;else if(n!==0)return}else if(e.runBackwards&&n!==0)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{this._time!==0&&(r=!1),u={};for(a in e)if(!q[a]||a==="autoCSS")u[a]=e[a];u.overwrite=0,u.data="isFromStart",u.lazy=r&&e.lazy!==!1,u.immediateRender=r,this._startAt=M.to(this.target,0,u);if(!r)this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null);else if(this._time===0)return}this._ease=i=i?i instanceof w?i:typeof i=="function"?new w(i,e.easeParams):E[i]||M.defaultEase:M.defaultEase,e.easeParams instanceof Array&&i.config&&(this._ease=i.config.apply(i,e.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null;if(this._targets){s=this._targets.length;while(--s>-1)this._initProps(this._targets[s],this._propLookup[s]={},this._siblings[s],t?t[s]:null)&&(o=!0)}else o=this._initProps(this.target,this._propLookup,this._siblings,t);o&&M._onPluginEvent("_onInitAllProps",this),t&&(this._firstPT||typeof this.target!="function"&&this._enabled(!1,!1));if(e.runBackwards){u=this._firstPT;while(u)u.s+=u.c,u.c=-u.c,u=u._next}this._onUpdate=e.onUpdate,this._initted=!0},c._initProps=function(t,n,r,i){var s,o,u,f,l,c;if(t==null)return!1;H[t._gsTweenID]&&W(),this.vars.css||t.style&&t!==e&&t.nodeType&&j.css&&this.vars.autoCSS!==!1&&D(this.vars,t);for(s in this.vars){c=this.vars[s];if(q[s])c&&(c instanceof Array||c.push&&a(c))&&c.join("").indexOf("{self}")!==-1&&(this.vars[s]=c=this._swapSelfInParams(c,this));else if(j[s]&&(f=new j[s])._onInitTween(t,this.vars[s],this)){this._firstPT=l={_next:this._firstPT,t:f,p:"setRatio",s:0,c:1,f:!0,n:s,pg:!0,pr:f._priority},o=f._overwriteProps.length;while(--o>-1)n[f._overwriteProps[o]]=this._firstPT;if(f._priority||f._onInitAllProps)u=!0;if(f._onDisable||f._onEnable)this._notifyPluginsOfEnabled=!0}else this._firstPT=n[s]=l={_next:this._firstPT,t:t,p:s,f:typeof t[s]=="function",n:s,pg:!1,pr:0},l.s=l.f?t[s.indexOf("set")||typeof t["get"+s.substr(3)]!="function"?s:"get"+s.substr(3)]():parseFloat(t[s]),l.c=typeof c=="string"&&c.charAt(1)==="="?parseInt(c.charAt(0)+"1",10)*Number(c.substr(2)):Number(c)-l.s||0;l&&l._next&&(l._next._prev=l)}return i&&this._kill(i,t)?this._initProps(t,n,r,i):this._overwrite>1&&this._firstPT&&r.length>1&&$(t,this,n,this._overwrite,r)?(this._kill(n,t),this._initProps(t,n,r,i)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(H[t._gsTweenID]=!0),u)},c.render=function(e,t,n){var r=this._time,i=this._duration,o=this._rawPrevTime,u,a,f,l;if(e>=i)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(u=!0,a="onComplete"),i===0&&(this._initted||!this.vars.lazy||n)&&(this._startTime===this._timeline._duration&&(e=0),(e===0||o<0||o===s)&&o!==e&&(n=!0,o>s&&(a="onReverseComplete")),this._rawPrevTime=l=!t||e||o===e?e:s);else if(e<1e-7){this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0;if(r!==0||i===0&&o>0&&o!==s)a="onReverseComplete",u=this._reversed;e<0&&(this._active=!1,i===0&&(this._initted||!this.vars.lazy||n)&&(o>=0&&(n=!0),this._rawPrevTime=l=!t||e||o===e?e:s)),this._initted||(n=!0)}else{this._totalTime=this._time=e;if(this._easeType){var c=e/i,h=this._easeType,p=this._easePower;if(h===1||h===3&&c>=.5)c=1-c;h===3&&(c*=2),p===1?c*=c:p===2?c*=c*c:p===3?c*=c*c*c:p===4&&(c*=c*c*c*c),h===1?this.ratio=1-c:h===2?this.ratio=c:e/i<.5?this.ratio=c/2:this.ratio=1-c/2}else this.ratio=this._ease.getRatio(e/i)}if(this._time===r&&!n)return;if(!this._initted){this._init();if(!this._initted||this._gc)return;if(!n&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)){this._time=this._totalTime=r,this._rawPrevTime=o,P.push(this),this._lazy=[e,t];return}this._time&&!u?this.ratio=this._ease.getRatio(this._time/i):u&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(this._time===0?0:1))}this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==r&&e>=0&&(this._active=!0),r===0&&(this._startAt&&(e>=0?this._startAt.render(e,t,n):a||(a="_dummyGS")),this.vars.onStart&&(this._time!==0||i===0)&&(t||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||b))),f=this._firstPT;while(f)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(e<0&&this._startAt&&e!==-0.0001&&this._startAt.render(e,t,n),t||(this._time!==r||u)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||b)),a&&(!this._gc||n)&&(e<0&&this._startAt&&!this._onUpdate&&e!==-0.0001&&this._startAt.render(e,t,n),u&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[a]&&this.vars[a].apply(this.vars[a+"Scope"]||this,this.vars[a+"Params"]||b),i===0&&this._rawPrevTime===s&&l!==s&&(this._rawPrevTime=0))},c._kill=function(e,t,n){e==="all"&&(e=null);if(e==null)if(t==null||t===this.target)return this._lazy=!1,this._enabled(!1,!1);t=typeof t!="string"?t||this._targets||this.target:M.selector(t)||t;var r,i,s,o,u,f,l,c,h;if((a(t)||_(t))&&typeof t[0]!="number"){r=t.length;while(--r>-1)this._kill(e,t[r])&&(f=!0)}else{if(this._targets){r=this._targets.length;while(--r>-1)if(t===this._targets[r]){u=this._propLookup[r]||{},this._overwrittenProps=this._overwrittenProps||[],i=this._overwrittenProps[r]=e?this._overwrittenProps[r]||{}:"all";break}}else{if(t!==this.target)return!1;u=this._propLookup,i=this._overwrittenProps=e?this._overwrittenProps||{}:"all"}if(u){l=e||u,c=e!==i&&i!=="all"&&e!==u&&(typeof e!="object"||!e._tempKill);for(s in l){if(o=u[s]){h||(h=[]),h.push(s),o.pg&&o.t._kill(l)&&(f=!0);if(!o.pg||o.t._overwriteProps.length===0)o._prev?o._prev._next=o._next:o===this._firstPT&&(this._firstPT=o._next),o._next&&(o._next._prev=o._prev),o._next=o._prev=null;delete u[s]}c&&(i[s]=1)}!this._firstPT&&this._initted&&this._enabled(!1,!1),h&&n&&V(this,n,t,h)}}return f},c.invalidate=function(){return this._notifyPluginsOfEnabled&&M._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],L.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-s,this.render(-this._delay)),this},c._enabled=function(e,t){p||h.wake();if(e&&this._gc){var n=this._targets,r;if(n){r=n.length;while(--r>-1)this._siblings[r]=X(n[r],this,!0)}else this._siblings=X(this.target,this,!0)}return L.prototype._enabled.call(this,e,t),this._notifyPluginsOfEnabled&&this._firstPT?M._onPluginEvent(e?"_onEnable":"_onDisable",this):!1},M.to=function(e,t,n){return new M(e,t,n)},M.from=function(e,t,n){return n.runBackwards=!0,n.immediateRender=n.immediateRender!=0,new M(e,t,n)},M.fromTo=function(e,t,n,r){return r.startAt=n,r.immediateRender=r.immediateRender!=0&&n.immediateRender!=0,new M(e,t,r)},M.delayedCall=function(e,t,n,r,i){return new M(t,0,{delay:e,onComplete:t,onCompleteParams:n,onCompleteScope:r,onReverseComplete:t,onReverseCompleteParams:n,onReverseCompleteScope:r,immediateRender:!1,useFrames:i,overwrite:0})},M.set=function(e,t){return new M(e,0,t)},M.getTweensOf=function(e,t){if(e==null)return[];e=typeof e!="string"?e:M.selector(e)||e;var n,r,i,s;if((a(e)||_(e))&&typeof e[0]!="number"){n=e.length,r=[];while(--n>-1)r=r.concat(M.getTweensOf(e[n],t));n=r.length;while(--n>-1){s=r[n],i=n;while(--i>-1)s===r[i]&&r.splice(n,1)}}else{r=X(e).concat(),n=r.length;while(--n>-1)(r[n]._gc||t&&!r[n].isActive())&&r.splice(n,1)}return r},M.killTweensOf=M.killDelayedCallsTo=function(e,t,n){typeof t=="object"&&(n=t,t=!1);var r=M.getTweensOf(e,t),i=r.length;while(--i>-1)r[i]._kill(n,e)};var K=g("plugins.TweenPlugin",function(e,t){this._overwriteProps=(e||"").split(","),this._propName=this._overwriteProps[0],this._priority=t||0,this._super=K.prototype},!0);c=K.prototype,K.version="1.10.1",K.API=2,c._firstPT=null,c._addTween=function(e,t,n,r,i,s){var o,u;if(r!=null&&(o=typeof r=="number"||r.charAt(1)!=="="?Number(r)-n:parseInt(r.charAt(0)+"1",10)*Number(r.substr(2))))return this._firstPT=u={_next:this._firstPT,t:e,p:t,s:n,c:o,f:typeof e[t]=="function",n:i||t,r:s},u._next&&(u._next._prev=u),u},c.setRatio=function(e){var t=this._firstPT,n=1e-6,r;while(t)r=t.c*e+t.s,t.r?r=Math.round(r):r<n&&r>-n&&(r=0),t.f?t.t[t.p](r):t.t[t.p]=r,t=t._next},c._kill=function(e){var t=this._overwriteProps,n=this._firstPT,r;if(e[this._propName]!=null)this._overwriteProps=[];else{r=t.length;while(--r>-1)e[t[r]]!=null&&t.splice(r,1)}while(n)e[n.n]!=null&&(n._next&&(n._next._prev=n._prev),n._prev?(n._prev._next=n._next,n._prev=null):this._firstPT===n&&(this._firstPT=n._next)),n=n._next;return!1},c._roundProps=function(e,t){var n=this._firstPT;while(n){if(e[this._propName]||n.n!=null&&e[n.n.split(this._propName+"_").join("")])n.r=t;n=n._next}},M._onPluginEvent=function(e,t){var n=t._firstPT,r,i,s,o,u;if(e==="_onInitAllProps"){while(n){u=n._next,i=s;while(i&&i.pr>n.pr)i=i._next;(n._prev=i?i._prev:o)?n._prev._next=n:s=n,(n._next=i)?i._prev=n:o=n,n=u}n=t._firstPT=s}while(n)n.pg&&typeof n.t[e]=="function"&&n.t[e]()&&(r=!0),n=n._next;return r},K.activate=function(e){var t=e.length;while(--t>-1)e[t].API===K.API&&(j[(new e[t])._propName]=e[t]);return!0},m.plugin=function(e){if(!e||!e.propName||!e.init||!e.API)throw"illegal plugin definition.";var t=e.propName,n=e.priority||0,r=e.overwriteProps,i={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},s=g("plugins."+t.charAt(0).toUpperCase()+t.substr(1)+"Plugin",function(){K.call(this,t,n),this._overwriteProps=r||[]},e.global===!0),o=s.prototype=new K(t),u;o.constructor=s,s.API=e.API;for(u in i)typeof e[u]=="function"&&(o[i[u]]=e[u]);return s.version=e.version,K.activate([s]),s},f=e._gsQueue;if(f){for(l=0;l<f.length;l++)f[l]();for(c in d)d[c].func||e.console.log("GSAP encountered missing dependency: com.greensock."+c)}p=!1})(typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window,"TweenLite");