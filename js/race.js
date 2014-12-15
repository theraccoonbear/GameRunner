var Race = BaseClass.extend({
	constructor: function(options) {
		
	},
	
	modSkill: function(obj, bits, newValue) {
		var ctxt = this;
		var v = ctxt.drill(obj, bits)
	},
	
	_xyz: null
});

var Dwarf = Race.extend({
	constructor: function(options) {
		var ctxt = this;
		Dwarf.super.constructor.call(this, options);
		
	},
	
	modify: function(options) {
		var ctxt = this;
		var char = options.char;
		
	
		
	},

	
	_xyz: null
});