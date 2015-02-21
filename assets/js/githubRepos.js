/* global jQuery */
(function( window, document, $, undefined ) {
  var $reposWrapper = $( '#repos' );
  var repoTemplate = $( '#repoTemplate' ).html();

  $.getJSON( 'https://api.github.com/users/sapphire-robot/repos', function( repos ) {
    repos.forEach( function( repo ) {
      var tmplt = repoTemplate.trim()
                    .replace( '{{ name }}', repo.name )
                    .replace( '{{ description }}', repo.description )
                    .replace( '{{ url }}', repo.html_url ) // jshint ignore:line
                    .replace( '{{ full_name }}', repo.full_name ); // jshint ignore:line
      $reposWrapper.append( tmplt );
    });
  });
})( this, this.document, jQuery );
