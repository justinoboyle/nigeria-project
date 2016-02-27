var project = "Nigeria Project";
var baseURL = "https://nigeria.justinoboyle.com";
var pagesBase = "/partial/";
var articleDrop = $('#articleDrop');
var currentPage = "";
var firstload = true;

function updateCurrentPage(newLink) {
  currentPage = newLink.toLowerCase();
  try {
    document.title = document.getElementById("link_" + newLink).innerHTML + " - Nigeria";
  }catch(e) {
    document.title = toTitleCase(newLink) + " - Nigeria";
  }
  if(!firstload) {
    $("#articleDrop").fadeOut();
    history.pushState(0, 0, "/" + currentPage);
  } else
  $("#articleDrop").hide();
  setTimeout(function() {
    getAndAppendPart((currentPage == "" ? "home" : currentPage) + ".md" );
    firstload = false;
    $("#articleDrop").fadeIn();
  }, firstload ? 0 : 400);

}

updateCurrentPage(window.location.pathname.substring(1));

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

function getAndAppendPart(part) {
  getPage(part, function(e) {
      articleDrop.html('<div id="pagehead-' + part + '">' + prepareString(e) + "</div>");
      $.material.init();
  });
}


function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function prepareString(md) {
  var converter = new showdown.Converter(),
  text      = md,
  html      = converter.makeHtml(text);
  return html;
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
