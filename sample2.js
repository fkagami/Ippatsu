$('#link_target').append('fuck');
//$('#link_target').attr('href', 'http://google.com');
$('#h1').attr('href', getUrl());

getUrl();

/*
function getUrl() {
  chrome.tabs.executeScript(null,
    {file: "jquery.js"}, function(){
      $('#link_target').attr('href', "aaa");
      //$('#link_target').attr('href', unescape($('#flash-player-embed').attr('flashvars').split('&flv_url=')[$('#flash-player-embed').attr('flashvars').split('&flv_url=').length - 1].split('&')[0]));
//    "code": "console.log(unescape($('#flash-player-embed').attr('flashvars').split('&flv_url=')[$('#flash-player-embed').attr('flashvars').split('&flv_url=').length - 1].split('&')[0]));"
  });
}

document.getElementById('#link_target').onClick = function() {
  //getUrl();
  //$('#link_target').attr('href', 'http://example.com/');
  //$('#link_target').append('fuck');
};

*/
