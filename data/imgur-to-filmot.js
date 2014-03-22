var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
	if (links[i].href.indexOf("imgur.com") != -1) {
	    links[i].href = links[i].href.replace("imgur.com","filmot.org");
	    console.log(links[i].href);
	}
}