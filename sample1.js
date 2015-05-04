function getUrl() {
  window.location.href = (unescape($('#flash-player-embed').attr('flashvars').split('&flv_url=')[$('#flash-player-embed').attr('flashvars').split('&flv_url=').length - 1].split('&')[0]));
}

getUrl();
