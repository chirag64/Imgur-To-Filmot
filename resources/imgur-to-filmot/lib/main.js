var tag = "a";
var data = require("self").data;
var pageMod = require("page-mod");
 
pageMod.PageMod({
  include: ["*"],
  contentScriptFile: data.url("replace-links.js"),
  onAttach: function(worker) {
    worker.port.emit("getElements", tag);
    worker.port.on("gotElement", function(elementContent) {
      console.log(elementContent);
    });
  }
});