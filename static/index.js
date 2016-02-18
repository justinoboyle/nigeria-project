var project = "Nigeria Project";
var baseURL = "https://nigeria.justinoboyle.com";
var pagesBase = "/partial/";

function grabAllPages(callback) {
  httpGet(pagesBase, function(d) { callback(JSON.parse(d)); });

}

grabAllPages(function(d) { console.log(d); });


function httpGet(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
