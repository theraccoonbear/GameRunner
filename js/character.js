var Character = BaseClass.extend({
	name: '',
	player: '',
	
	str: 0,
	dex: 0,
	int: 0,
	wis: 0,
	con: 0,
	cha: 0,
	
	
	xp: '',
	race: null,
	class: null,
	
	constructor: function(options) {
		var ctxt = this;
		Character.super.constructor.call(this, options);
		console.log(ctxt.rollAbilities());
	},
	
	rollAbilities: function(options) {
		var ctxt = this;
		var scores = [];
		for (var i = 0; i < 6; i++) {
		 scores.push(dice.rollAbility());
		}
		
		$.each(scores, function(i, s) {
			var $span = ctxt.$abilityScores.find('li:eq(' + i + ') span.score');
			$span.html(s);
			ctxt[$span.data('ability')] = s;
		});
		
		//return scores;
	},

	regActions: function() {
		var ctxt = this;
		
		ctxt.$abilityScores.sortable({
			cursor: "move",
			axis: "y",
			update: function(e, ui) {
				//ctxt.$abilityScores.each(
				ctxt.$abilityScores.find('li span.score').each(function(i, el) {
					var $span = $(el);
					
					var $lbl = ctxt.$scoreLabels.find('li:eq(' + i + ')');
					
					ctxt[$lbl.data('ability')] = $span.html() * 1;
				});
			}
		});
		
		ctxt.$newChar.on('click', function(e) {
			ctxt = new Character({
				name: "Bruennor",
			});
		});
		
	},
	
	_xyz: null
});

var char = new Character({
	name: "Bruennor",
});