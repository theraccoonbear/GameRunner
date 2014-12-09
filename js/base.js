var BaseClass = Class.extend({
	constructor: function(options) {
		options = typeof options === 'undefined' ? {} : options;
		for (var p in options) {
			this[p] = options[p];
		}
		
		BaseClass.super.constructor.call(this, options);
	},

	_xyz: null
});