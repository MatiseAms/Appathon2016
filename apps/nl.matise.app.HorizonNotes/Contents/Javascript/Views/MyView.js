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
	      width: 200,
	      height: 200,
				hAlign: 'right',
				vOffset: 100,
				hOffset: 100,
	    },
			ClassName: 'topContainer'
	  } ).appendTo( this );
		view.elements.topContainer.element.innerHTML = '<p>Hoi wereld</p>';
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
