// Create a class and extended it from the MAF.system.SidebarView
var MyView = new MAF.Class({
	ClassName: 'MyView',
	Extends: MAF.system.FullscreenView,

	initialize: function() {
		this.parent();

		// Create a Room across all households
		// this.room = new MAF.Room( this.ClassName );
		// Create a Room for this specific household
		this.room = new MAF.PrivateRoom('MatiseFissa');
	},


	// Create your view template
	createView: function() {
		var room = this.room;
		// Keep track of the clients connected
		var clients = {};
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
		}).appendTo(this);
		view.elements.topContainer.element.innerHTML = '<p>Hoi wereld</p>';

		// Set listeners for Room and Connection
		(function(evt) {
			var payload = evt.payload;

			switch (evt.type) {
				case 'onConnected':
					log('room connected');
					// If connected but room not joined make sure to join it automaticly
					if (!room.joined) room.join();
					return;
				case 'onDisconnected':
					clients = {}; // Reset clients
					log('connection lost waiting for reconnect and automaticly rejoin');
					return;
				case 'onCreated':
					// Create an url to the client application and pass the hash as querystring
					log('room created', payload.hash);
					return;
				case 'onDestroyed':
					clients = {}; // Reset clients
					log('room destroyed', payload.hash);
					return;
				case 'onJoined':
					// If user is not the app then log the user
					if (payload.user !== room.user)
						log('user joined', payload.user);
					return;
				case 'onHasLeft':
					// If user is not the app then log the user
					if (payload.user !== room.user)
						log('user has left', payload.user);
					return;
				case 'onData':
					var data = payload.data;

					if ('draw' === data.e)
						return draw(data.c, data.k, data.x, data.y);
					if ('clear' === data.e)
						return reset();
					break;
				default:
					log(evt.type, payload);
					break;
			}
		}).subscribeTo(
			room, [
				'onConnected',
				'onDisconnected',
				'onCreated',
				'onDestroyed',
				'onJoined',
				'onHasLeft',
				'onData',
				'onError'
			]
		);

		// If Room socket is connected create and join room
		if (room.connected) room.join();

	},

	// After create view and when returning to the view
	// the update view is called
	updateView: function() {
		// Reference to the current view
		var view = this;
		this.helloWorld();
	},
	helloWorld: function() {
		console.log('hello world');
	},
	destroyView: function() {
		if (this.room) {
			// Leave room, will trigger an onLeaved of the app user
			this.room.leave();

			// Destroy the room
			this.room.destroy();

			// Unreference from view for GC
			delete this.room;
		}
	}
});
