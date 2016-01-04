var client = new WebTorrent()

var torrentId = 'magnet:?xt=urn:btih:c4ac88039c477734f8f99ffbff6e329793643c17'

client.add(torrentId, function (torrent) {

  var file = torrent.files[0];
  file.getBuffer(function(err, buffer){
    markdownString = buffer.toString();
    document.getElementById('torrent-content').innerHTML = marked(markdownString);
  });
})
