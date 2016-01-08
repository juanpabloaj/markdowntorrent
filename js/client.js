var client = new WebTorrent()

var torrentHash = 'e132c405b9ba376e61e63fbdbff4f98a26d48b1b';

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
