
var BaseClass = Class.extend({
	toHook: [],
	
	constructor: function(options) {
		options = typeof options === 'undefined' ? {} : options;
		for (var p in options) {
			this[p] = options[p];
		}
		
		BaseClass.super.constructor.call(this, options);
		
		this.hooks();
		if (typeof this.regActions === 'function') {
			this.regActions();
		}
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

	drill: function drill(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    while (a.length) {
        var n = a.shift();
        if (n in o) {
            o = o[n];
        } else {
            return false;
        }
    }
    return o;
	},

	
	//drill: function(o, b, d) {
	//	b = b instanceof String ? b.split('.') : b;
	//	d = typeof d === 'undefined' ? false : d;
	//	var ret_val = d;
	//	
	//	if (typeof o === 'undefined') {
	//		return ret_val;
	//	}
	//	
	//	ret_val = o;
	//	for (var i = 0; i < b.length; i++) {
	//		if (typeof ret_val[b[i]] === 'undefined') {
	//			ret_val = d;
	//			break;
	//		} else {
	//			ret_val = ret_val[b[i]];
	//		}
	//	}
	//	
	//	return ret_val;
	//},
	
	_xyz: null
});