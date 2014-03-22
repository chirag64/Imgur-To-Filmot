// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
 
// Create a page mod
pageMod.PageMod({
  include: "*",
  contentScriptFile: self.data.url("imgur-to-filmot.js")
});