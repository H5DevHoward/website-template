define(["jquery","joshua/util/Class"],function(e,t){function r(e,t){return parseInt(e+Math.random()*(t-e))}var n=t.extend({init:function(t,n){this.$element=e(t),this._setCss(),this._initProperty(n),this._generateRandom()}});return n._options={count:20,minSpeed:6,maxSpeed:10,minDelay:2,maxDelay:6},n.prototype._setCss=function(){this.$element.css({"pointer-events":"none","user-select":"none"}),this.$element.css("position")!="fixed"&&this.$element.css("position")!="relative"&&this.$element.css("position","relative")},n.prototype._initProperty=function(t){this._options=e.extend({},n._options,t)},n.prototype._generateRandom=function(){var t=this;for(var n=0;n<t._options.count;++n)var i=r(10,t.$element.width()-20),s=r(t._options.minSpeed,t._options.maxSpeed),o=r(t._options.minDelay,t._options.maxDelay),u=r(0,t._options.source.length),a=e("<img>").attr("src",t._options.source[u]).css({position:"absolute",left:i,top:-20,animation:"rain "+s+"s linear "+o+"s infinite"}).appendTo(t.$element)},n});