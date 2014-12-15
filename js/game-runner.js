var GameRunner = BaseClass.extend({
	constructor: function(options) {
		var ctxt = this;
		GameRunner.super.constructor.call(this, options);
		ctxt.dice = new Dice();
		
		console.log(ctxt.dice.roll('3d6'));
		
		var race = new Dwarf();
		
	},
});

var gr = new GameRunner();