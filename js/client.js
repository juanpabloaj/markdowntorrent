var client = new WebTorrent()

var torrentHash = 'ca399aac0d619354116f7180fd3ac644';

if (window.location.hash) {
  torrentHash = window.location.hash.substring(1)
}

var initialMsg = 'loading torrent ' + torrentHash + '...';
document.getElementById('torrent-content').innerHTML = initialMsg;

var torrentId = 'https://peerify.btorrent.xyz/torrents/' + torrentHash + '.torrent'

client.add(torrentId, function (torrent) {

  var file = torrent.files[0];
  file.getBuffer(function(err, buffer){
    markdownString = buffer.toString();
    document.getElementById('torrent-content').innerHTML = marked(markdownString);
  });
})
