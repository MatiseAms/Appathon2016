// Create a class and extended it from the MAF.system.SidebarView
var MyView = new MAF.Class({
	ClassName: 'MyView',

	Extends: MAF.system.SidebarView,

	// Create your view template
	createView: function () {
		// Reference to the current view
		var view = this;
		view.elements.ourText = new MAF.element.Text( {
	    label: MAF.mediaplayer.getCurrentChannel().number,
	    styles:{
	      width: this.width,
	      height: this.height,
	      fontSize: 60,
	      anchorStyle: 'center'
	    }
	  } ).appendTo( view );
	},

	// After create view and when returning to the view
	// the update view is called
	updateView: function () {
		console.log('fiss');
		console.log(MAF.mediaplayer.getCurrentChannel());
		// Reference to the current view
		var view = this;
	},
});
