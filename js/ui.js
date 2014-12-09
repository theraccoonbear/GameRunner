var UIClass = BaseClass.extend({
	constructor: function(options) {
		UIClass.super.constructor.call(this, options);
		this.initTabs();
	},
	
	initTabs: function() {
		jQuery.jQueryTab({
			responsive:true,							// enable accordian on smaller screens
			collapsible:true,							// allow all accordions to collapse 
			useCookie: true,							// remember last active tab using cookie
			openOnhover: false,						// open tab on hover
			initialTab: 4,								// tab to open initially; start count at 1 not 0
			
			cookieName: 'active-tab',			// name of the cookie set to remember last active tab
			cookieExpires: 4,							// when it expires in days or standard UTC time
			cookiePath: '/',							// path on which cookie is accessible
			cookieDomain:'',							// domain of the cookie
			cookieSecure: false,					// enable secure cookie - requires https connection to transfer
			
			tabClass:'tabs',							// class of the tabs
			headerClass:'accordion_tabs',	// class of the header of accordion on smaller screens
			contentClass:'tab_content',		// class of container
			activeClass:'active',					// name of the class used for active tab
			
			tabTransition: 'fade',				// transitions to use - normal or fade
			tabIntime:500,								// time for animation IN (1000 = 1s)
			tabOuttime:0,									// time for animation OUT (1000 = 1s)
			
			accordionTransition: 'slide',	// transitions to use - normal or slide
			accordionIntime:500,					// time for animation IN (1000 = 1s)
			accordionOuttime:400,					// time for animation OUT (1000 = 1s)
		
			before: function(){},					// function to call before tab is opened
			after: function(){}						// function to call after tab is opened
		});

	},
	
	_xyz: null
});

var UI = new UIClass();