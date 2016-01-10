var client = new WebTorrent()

var torrentHash = '7da802b34a7287b1bd8910f688e02a26ecf60a9c';

if (window.location.hash) {
  torrentHash = window.location.hash.substring(1)
}

var initialMsg = 'loading torrent ' + torrentHash + '...';
document.getElementById('torrent-content').innerHTML = initialMsg;

var torrentId = 'magnet:?xt=urn:btih:' + torrentHash;

client.add(torrentId, function (torrent) {

  var file = torrent.files[0];
  file.getBuffer(function(err, buffer){
    markdownString = buffer.toString();
    document.getElementById('torrent-content').innerHTML = marked(markdownString);
  });
})
