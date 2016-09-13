// Include your views
// require('Styles/app.css');
include('Styles/theme.js');
include('Javascript/Views/MyView.js');

// Init application with view config
MAF.application.init({
	views: [
		{ id: 'view-MyView', viewClass: MyView }
	],
	defaultViewId: 'view-MyView', // Declare what view to be loaded when opening the app
	settingsViewId: null // Declare what view is opened when a used loads the settings
});
