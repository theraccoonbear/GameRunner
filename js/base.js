var BaseClass = Class.extend({
	toHook: [],
	
	constructor: function(options) {
		options = typeof options === 'undefined' ? {} : options;
		for (var p in options) {
			this[p] = options[p];
		}
		
		BaseClass.super.constructor.call(this, options);
		
		this.hooks();
	},
	
	hooks: function() {
		var ctxt = this;
		
		$.each(ctxt.toHook, function(i, s) {
			if (s == window) {
				ctxt.$window = $(window);
			} else if (s == document) {
				ctxt.$document = $(document);
			} else {
				ctxt['$' + s.replace(/^[#\.]/, '')] = $(s);
			}
		});
		
		$('[id]').each(function(i, e) {
			var $e = $(e);
			var id = $e.attr('id');
			if (!ctxt['$' + id]) {
				ctxt['$' + id] = $e;
			}
		});
	},
	
	restoreSaved: function() {
		var ctxt = this;
		for (var p in ctxt) {
			if (p.substr(0, 1) === '$') {
				if (typeof ctxt[p].val === 'function') {
					var key = 'setValues' + ctxt[p].attr('id');
					if (typeof localStorage[key] !== 'undefined') {
						ctxt[p].val(localStorage[key]);
					}
					if (!ctxt[p].data('changeHooked')) {
						ctxt[p].on('change', function(e) {
							var $this = $(this);
							localStorage['setValues' + $this.attr('id')] = $this.val();
						}).data('changeHooked', true);
					}
				}
			}
			
		}
	},

	_xyz: null
});