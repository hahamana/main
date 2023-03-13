(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.reflect_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// thin
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,247.5,0.1,-247.5).s().p("EgXbAnEMAAAhOHMAu3AAAMAAABOHg");
	this.shape.setTransform(150,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_inner, new cjs.Rectangle(0,0,300,1200), null);


(lib.reflect_mask_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("A6tJEQgFAAgBgCQgJgcgFgeQANgRALgVQABgCAFAAIAAgKQAtgeAqghQADgCAAgFIAAgKIAAhQIAKAAIAAgKIAAgKQA5g6BBgyQADgCAFAAQAAgFgCgBQgIgEgKAAQgLAJgTADQjHAgATi4QB0iyDdhQQAygSBSAJQBCAIAjAoQApArARBLQACAHAKABQBmAHgMB0QACAuAqgqQAugxBkAAQAFAAAFgFQAognAegyQBrgfAoBYQALAXAgAFQAeAEAeAAQBfgTAihRQAbg/A5geQAMgGAPAAIAeAAQA9AYAOBDIAKAsIAGgDQAngRAogPQBTAGAyAmQARAMAGgNQADgIAKgFQBChKBZg2QAFgCACgKQAEgVgQABQhMhTAZiJIABgKQBCh3CQgoQAFgBAFAAIAAgKQAoAAAnAFIABAFQCKAagVC3QgHA9geAoQgUAZAyACQAbABANAMQAhgMgIg6IAFAAQAAgFACgFQAYg7BeAJQAAAFACABIAPAIQAXAPAYASQAkAbAvgUQBNgjBggTQA7AAAfAeIAFAFQARgrgqgqQgJhoBQgKQBNgJAgArQAFgFADgGQAUgpAagjQALgNAQgEQBRgSAcAqQAaASgIA0IgSBuQgJAxAdACQBKAEAQA3QADA1gTAhQgmBBhDAmQgTALgUAAQhEACgqASQgpBAgcBLQgeBRgyA8QhEBSijgNQAAgFgCgBQh0gkASioIAKgKQAFgFgBgFQgFg2goArQgEAGgGABQgbAGgWAAQgwAAgZALQgqARguAGQgdAEgcAIIgtANQg/ASg2ABQgFAAgDACQhPBWhxA0QgeAAgeACQg4AEgggUQgtgdg5gRQgKAAgHAEQgzAlhAAVIgtAPQgmAMg2gDQhEgEgqASQgSAMgHAUQgYBKhlgGQgKAAgFgFQgWgYgigKQgggJg5ASQAAAFgBAAQg0AMgbgRQgKAAgGgFQgfgcg1gGQgKgBgHAEQhEAuhBAyQgbAXg1gCQgzgCgfARQhAAhhUALQg5gEgagiQgfgogkAwQgKAKgEATQgKAqgeAYQgdAWgiASQgtAYglAAQg1AAgmgxgA0RgfQg0ASgyAXQAJA3gEAtQAAABAAABQAAABAAAAQAAABABAAQAAAAAAAAQBHgqAehSQAIgWgJAAIgEABg");
	this.shape.setTransform(0.0266,-0.02);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_mask_33, new cjs.Rectangle(-173,-62.9,346.1,125.9), null);


(lib.glitter_inner_sphere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,51.4).s().p("AlhFhQiSiSAAjPQAAjPCSiSQCSiSDPAAQDPAACSCSQCTCSAADPQAADPiTCSQiSCTjPAAQjPAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_inner_sphere, new cjs.Rectangle(-50,-50,100,100), null);


(lib.reflect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// main
	this.lighter_tgt = new lib.reflect_inner();
	this.lighter_tgt.name = "lighter_tgt";
	this.lighter_tgt.parent = this;
	this.lighter_tgt.setTransform(0,-243.9,1.2275,1.2275,0,0,-20.0004);
	this.lighter_tgt.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect, new cjs.Rectangle(0,-369.8,346.1,739.7), null);


(lib.reflect_container_cjs_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{flash:20});

	// timeline functions:
	this.frame_0 = function() {
		this.preview.visible = false;
	}
	this.frame_20 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(19));

	// preview
	this.preview = new lib.reflect();
	this.preview.name = "preview";
	this.preview.parent = this;
	this.preview.setTransform(-0.5,-0.1,1,1,0,0,0,-0.5,-0.1);
	this.preview.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.preview).wait(39));

	// reflect
	this.instance = new lib.reflect();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,432.9,1,1,0,0,0,-0.5,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:-0.1,y:-0.1},9,cjs.Ease.get(-1)).to({regY:0.1,y:-432.7},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-802.6,346.1,1605.3000000000002);


(lib.glitter_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.glitter_inner_sphere();
	this.instance.parent = this;
	this.instance.setTransform(0,0.05,1.5,0.0862,-45);

	this.instance_1 = new lib.glitter_inner_sphere();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.3342,0.3342);

	this.instance_2 = new lib.glitter_inner_sphere();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-0.05,1.5,0.0862,45);

	this.instance_3 = new lib.glitter_inner_sphere();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_inner, new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001), null);


(lib.glitter = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// flare
	this.lighter_tgt = new lib.glitter_inner();
	this.lighter_tgt.name = "lighter_tgt";
	this.lighter_tgt.parent = this;
	this.lighter_tgt.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter, new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001), null);


(lib.reflect_wrapper_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cjs
	this.reflect = new lib.reflect_container_cjs_33();
	this.reflect.name = "reflect";
	this.reflect.parent = this;
	this.reflect.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.reflect).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_wrapper_33, new cjs.Rectangle(0,-369.8,346.1,739.7), null);


(lib.glitter_container_cjs = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loop:20});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay( Math.floor( Math.random() * 20 ) );
	}
	this.frame_20 = function() {
		
	}
	this.frame_50 = function() {
		this.gotoAndPlay( 0 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50).wait(1));

	// mc
	this.lux = new lib.glitter();
	this.lux.name = "lux";
	this.lux.parent = this;

	this.instance = new lib.glitter();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lux}]}).to({state:[]},1).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},9).to({state:[]},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({scaleX:0.7333,scaleY:0.7333,alpha:0.75},9,cjs.Ease.get(0.5)).to({scaleX:0.7,scaleY:0.7,alpha:0},9,cjs.Ease.get(-0.5)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001);


(lib.glitter_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cjs
	this.instance = new lib.glitter_container_cjs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_wrapper, new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001), null);


(lib.sign_effect_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.parent = this;
	this.instance.setTransform(213.95,656.1);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.4,646.2);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.parent = this;
	this.instance_2.setTransform(335.8,582.25);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.parent = this;
	this.instance_3.setTransform(235.6,582.25);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.parent = this;
	this.instance_4.setTransform(159.9,626.1,0.7247,0.7247);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.parent = this;
	this.instance_5.setTransform(76.4,638.8,0.6923,0.6923);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.parent = this;
	this.instance_6.setTransform(287.05,654.45,0.6599,0.6599);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.parent = this;
	this.instance_7.setTransform(129.75,673.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// mask_idn
	this.reflect_mask = new lib.reflect_mask_33();
	this.reflect_mask.name = "reflect_mask";
	this.reflect_mask.parent = this;
	this.reflect_mask.setTransform(180.95,638.05);
	this.reflect_mask.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.reflect_mask).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgaGA1/QgFAAAAgBQgKgdgFgeQAOgQAKgWQABgCAFAAIAAgKQAtgeArghQACgCAAgFIAAgKIAAhQIAKAAIAAgKIAAgKQA6g5BAgyQADgDAFAAQAAgFgCgBQgIgEgKAAQgKAKgTADQjIAfATi4QB0izDdhQQAzgSBSAKQBBAIAjAnQAqAsARBKQABAHALABQBlAHgMB1QADAvApgrQAvgwBjgBQAFAAAFgFQAogoAegyQBsgfAnBYQAMAZAgAEQAdAEAeAAQBggTAihRQAahAA6gdQALgHAPAAIAeAAQA9AYAOBDIAKAsIAGgCQAngSAngPQBUAGAzAmQARANAFgOQADgIAKgFQBChKBag1QAEgDACgJQAFgWgRABQhMhSAZiKIABgKQBCh3CRgnQAEgCAFAAIAAgKQAoAAAoAFIAAAFQCLAbgVC3QgHA9gfAnQgUAaAyABQAcABAMAMQAhgMgIg6IAFAAQAAgFACgEQAYg8BeAJQAAAFACABIAPAJQAYAPAYASQAjAbAwgVQBNgiBfgUQA8ABAeAdIAFAFQASgrgrgqQgIhnBPgKQBOgKAfArQAFgFADgGQAUgpAbgiQAKgOARgDQBQgTAcAqQAbATgIAzIgTBuQgJAxAeACQBKAFAPA2QAEA2gUAhQgmBAhCAmQgUALgUABQhDACgrARQgpBAgcBNQgdBRgyA8QhEBSikgOQAAgFgBAAQh1glASioIAKgKQAFgFAAgEQgGg4gnAtQgFAFgGABQgbAGgWAAQgvABgaAKQgqARgtAGQgeAEgbAIIgtANQhAASg2ABQgFAAgCADQhQBVhxA0QgeAAgeACQg4AEgfgUQgtgcg6gSQgKAAgHAFQg0Akg+AWIgtAPQgmAMg3gDQhDgEgrARQgSAMgGAUQgYBLhmgGQgKgBgEgFQgWgXgigKQgggJg6ARQAAAFgBABQgzAMgcgSQgKAAgFgFQgggcg1gGQgKgBgHAFQhEAthBAyQgbAXg1gCQgygBggAQQg/AihVAKQg4gEgagiQgfgnglAvQgJALgFASQgJArgfAXQgdAWgiATQgsAYglAAQg2AAgmgygEgTpAsbQg0ASgzAYQAJA4gDAtQAAABAAABQAAAAAAABQAAAAAAAAQABAAAAAAQBHgpAehUQAIgWgJAAIgEABg");
	mask.setTransform(177.0016,350.4879);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_33();
	this.reflect_wrapper.name = "reflect_wrapper";
	this.reflect_wrapper.parent = this;
	this.reflect_wrapper.setTransform(7.95,638.05);

	var maskedShapeInstanceList = [this.reflect_wrapper];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.reflect_wrapper).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign_effect_33, new cjs.Rectangle(-26.7,162.1,418.59999999999997,641.3), null);


(lib.replace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sign
	this.sign_effect = new lib.sign_effect_33();
	this.sign_effect.name = "sign_effect";
	this.sign_effect.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.sign_effect).wait(1));

}).prototype = getMCSymbolPrototype(lib.replace, new cjs.Rectangle(-26.7,0,666.7,1007.9), null);


// stage content:
(lib._33_sign_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// replace
	this.instance = new lib.replace();
	this.instance.parent = this;
	this.instance.setTransform(182.6,503.9,1,1,0,0,0,182.6,503.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(293.3,668.2,98.59999999999997,339.69999999999993);
// library properties:
lib.properties = {
	id: '_33_sign_effect',
	width: 640,
	height: 800,
	fps: 18,
	color: "#333333",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['_33_sign_effect'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;