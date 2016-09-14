// Create a class and extended it from the MAF.system.SidebarView
var MyView = new MAF.Class({
	ClassName: 'MyView',

	Extends: MAF.system.FullscreenView,

	// Create your view template
	createView: function () {
		// Reference to the current view
		var view = this;
		view.elements.topContainer = new MAF.element.Container( {
	    styles:{
	      width: 840,
	      height: 1080,
				hAlign: 'right',
				vOffset: 0,
				hOffset: 120,
	    },
			ClassName: 'topContainer'
	  } ).appendTo( this );
		view.elements.topContainer.element.innerHTML = '<div class="sideScreen"><div class="left"><div class="row openApp"><div class="black"><p class="text">Quick open your App!</p><span><span></div></div><div class="row notification"><div class="black"><div class="profile"></div><p class="text">120 total</p></div><div class="white"><p class="text">+ 50 points</p><span><span></div></div><div class="row notification"><div class="black"><div class="profile"></div><p class="text">90 total</p></div><div class="white"><p class="text">+ 0 points</p><span><span></div></div></div><div class="right"><div class="iconHolder"><div class="icon"><div class="actualIcon"></div></div><div class="loader loader--style2" title="1"><svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="160px" height="160px" viewBox="0 0 50 50" xml:space="preserve"><path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/></path></svg></div></div></div></div>';
	},

	// After create view and when returning to the view
	// the update view is called
	updateView: function () {
		// Reference to the current view
		var view = this;
		this.helloWorld();
	},
	helloWorld: function () {
		console.log('hello world');
	}
});
