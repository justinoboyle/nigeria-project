var project = "Nigeria Project";
var baseURL = "https://nigeria.justinoboyle.com";
var pagesBase = "/partial/";
var articleDrop = $('#articleDrop');
var currentPage = "";
var firstload = true;

setupNav(function() {
  updateCurrentPage(window.location.pathname.substring(1));
  $(".background-image").hide();
  $(".background-image").fadeIn();
});

var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

function setupNav(callback) {
    $("#navbar-container").hide();
    httpGet("/partial/navbar.html", function(d) {
        $("#navbar-container").html(d);
        $("#navbar-container").fadeIn();
        callback()
    });
}

function updateCurrentPage(newLink) {
    currentPage = newLink.toLowerCase();
    var navtoggle = $('.navbar-toggle')[0];
    if(navtoggle.getAttribute("aria-expanded") == true)
      navtoggle.click();
    try {
        document.title = document.getElementById("link_" + newLink).innerHTML + " - Nigeria";
    } catch (e) {
        document.title = toTitleCase(newLink) + " - Nigeria";
    }
    if (!firstload) {
        $("#articleDrop").fadeOut();
        history.pushState(0, 0, "/" + currentPage);
    } else
        $("#articleDrop").hide();
    setTimeout(function() {
        getAndAppendPart((currentPage == "" ? "home" : currentPage) + ".md");
        firstload = false;
        $("#articleDrop").fadeIn();
    }, firstload ? 0 : 400);

}



var hashTagActive = "";
$(".scroll").click(function(event) {
    if (hashTagActive != this.hash) {
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
    });
}


function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function prepareString(md) {
    var converter = new showdown.Converter(),
        text = md,
        html = converter.makeHtml(text);
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
