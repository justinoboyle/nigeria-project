var project = "Nigeria Project";
var baseURL = "https://nigeria.justinoboyle.com";
var pagesBase = "/partial/";
var articleDrop = $('#articleDrop');

var hashTagActive = "";
$(".scroll").click(function (event) {
    if(hashTagActive != this.hash) {
        event.preventDefault();

        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        $('html,body').animate({
            scrollTop: dest
        }, 2000, 'swing');
        hashTagActive = this.hash;
    }
});

function grabAllPages(callback) {
    httpGet(pagesBase, function(d) {
        callback(JSON.parse(d));
    });

}

grabAllPages(function(d) {
    for (var part in d) {
      getAndAppendPart(d[part]);
    }
});

function getAndAppendPart(part) {
  getPage(part, function(e) {
      articleDrop.html(articleDrop.html() + '<div id="pagehead-' + part + '">' + prepareString(e) + "</div>");
  });
}

function setupNavbar() {
  return $("h1");
}


function prepareString(md) {
    return markdown.toHTML(md);
}

function httpGet(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}


function getPage(page, callback) {
    httpGet(pagesBase + page, function(resp) {
        callback(resp);
    });
}
