var Dice = BaseClass.extend({
	
	rollRgx: /^(\d+)d(\d+)$/,
	
	constructor: function(options) {
		Dice.super.constructor.call(this, options);
	},
	
	_roll: function(qty, type) {
		var sum = 0;
		for (var i = 0; i < qty; i++) {
			sum += Math.ceil(Math.random() * type);
		}
		return sum;
	},
	
	roll: function(a, b) {
		var ctxt = this;
		if (typeof b === 'undefined') {
			if (ctxt.rollRgx.test(a)) {
				var m = ctxt.rollRgx.exec(a);
				a = m[1];
				b = m[2];
			} else if (typeof parseInt(a) === 'number') {
				a = 1;
				b = parseInt(a);
			} else {
				a = 1;
				b = 6;
			}
		}
		
		a *= 1;
		b *= 1;
		
		return ctxt._roll(a, b);
	},
	
	_xyz: null
});