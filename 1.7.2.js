(function( $ ) {

$.widget( "demo.progressbar", {
	// **CHANGE** initialize the plugin
	_init: function() {
		this.element.addClass( "progressbar" );
		this._update();
	},

	destroy: function() {
		this.element
			.removeClass('progressbar')
			.text('');

		// **CHANGE** call the base destroy function
		$.widget.prototype.destroy.call( this );
	},

	complete: function() {
		return this.options.value === 100;
	},

	// **CHANGE** react to option changes after initialization
	_setData: function( key, value ) {
		switch ( key ) {
			case "value":
				this.options.value = this._constrain( value );
				break;
			default:
				this.options[ key ] = value;
				break;
		}

		this._update();
	},

	_constrain: function( value ) {
		return Math.max( 0, Math.min( 100, value ) );
	},

	_update: function() {
		this.element.text( this.options.value + "%" );

		if ( this.options.value === 100 ) {
			this._trigger( "complete", null, { value: 100 } );
		}
	}
});

// **CHANGE** identify getters
$.demo.progressbar.getter = "complete";

// **CHANGE** set default values
$.demo.progressbar.defaults = {
	value: 0
};

})(jQuery);

