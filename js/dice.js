var Dice = BaseClass.extend({
	
	rollRgx: /^(\d+)d(\d+)$/,
	types: [4, 6, 8, 10, 12, 20, 100, 1000, 10000],
	
	constructor: function(options) {
		var ctxt = this;
		
		Dice.super.constructor.call(this, options);
		
		for (var i = 1; i <= 100; i++) {
			ctxt.$dieQty.append('<option value="' + i + '">' + i + '</option>');
		}
		
		for (var i in ctxt.types) {
			ctxt.$dieType.append('<option value="' + ctxt.types[i] + '">d' + ctxt.types[i] + '</option>');
		}
		
		ctxt.$doRoll.on('click', function(e) {
			ctxt.$rollResult.val(ctxt.roll(ctxt.$dieQty.val(), ctxt.$dieType.val()));
		});
		
		ctxt.restoreSaved();
		
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
	
	rollAbility: function() {
		var ctxt = this;
		var rolls =[];
		for (var i = 0; i < 4; i++) {
			rolls.push(ctxt.roll('1d6'));
		}
		
		var min_idx = false;
		for (var i = 0; i < rolls.length; i++) {
			min_idx = min_idx === false ? (i) : (rolls[min_idx] < rolls[i] ? min_idx : i);
		}
		
		var dropped = rolls.splice(min_idx, 1);
		console.log(dropped, rolls);
		
		return rolls.reduce(function(p, c) { return p + c; });
	},
	
	_xyz: null
});

dice = new Dice();