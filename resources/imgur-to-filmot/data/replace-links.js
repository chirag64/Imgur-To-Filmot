self.port.on("getElements", function(tag) {
  var links = document.getElementsByTagName(tag);
  for (var i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("reddit.com") == -1) {
        links[i].href = links[i].href.replace("imgur.com","filmot.com");
    }
  }
});