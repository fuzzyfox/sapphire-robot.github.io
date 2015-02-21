/* global jQuery, cornify_add */
(function( window, document, $, undefined ) {
  $( function() {
    $( 'a[href=#unicorns]' ).on( 'click', function() {
      setInterval( cornify_add, (Math.random() * 2000) + 1000 ); // jshint ignore:line

      return false;
    });
  });
})( this, this.document, jQuery );
