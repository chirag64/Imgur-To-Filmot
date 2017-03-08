var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
if (links[i].href.indexOf("imgur.com") != -1) {
    if (!!links[i].dataset.hrefUrl) {
      links[i].dataset.hrefUrl = links[i].dataset.hrefUrl.replace("imgur.com","filmot.org");
    }
    if (!!links[i].dataset.outboundUrl) {
      links[i].dataset.outboundUrl = '';
    }
    links[i].href = links[i].href.replace("imgur.com","filmot.org");
  }
}
