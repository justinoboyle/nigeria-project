var express = require('express');
var fs = require('fs');
var app = express();
var staticDirBase = __dirname + '/content';
app.set('port', (process.env.PORT || 5000));

app.get('/partial/*', function(request, response) {
    var pathString = __dirname + "/" + fixURL(request.url, { removeQuestionMark: true });
    fs.lstat(pathString, function(err, stats) {
        if (err) {
            // send 404 not found
            response.status(404);
            response.send("That page could not be found. Please try again.");
            return;
        }
        // the file exists.
        if (stats.isDirectory()) {
          fs.readdir(pathString, function(err, files) {
              if (err) {
                response.status(404);
                response.send("That page could not be found. Please try again.");
                return;
              }
              var respArr = [];
              files.forEach(function(f) {
                  respArr.push(f);
              });
              response.status(404);
              response.send(JSON.stringify(respArr));
              return;
          });
          return;
        }
        response.sendFile(pathString);
    });
});

app.get('/static/*', function(request, response) {
    var pathString = __dirname + "/" + fixURL(request.url, { removeQuestionMark: true });
    fs.lstat(pathString, function(err, stats) {
        if (err) {
            // send 404 not found
            response.status(404);
            response.send("That page could not be found. Please try again.");
            return;
        }
        // the file exists.
        if (stats.isDirectory()) {
          fs.readdir(pathString, function(err, files) {
              if (err) {
                response.status(404);
                response.send("That page could not be found. Please try again.");
                return;
              }
              var respArr = [];
              files.forEach(function(f) {
                  respArr.push(f);
              });
              response.status(404);
              response.send(JSON.stringify(respArr));
              return;
          });
          return;
        }
        response.sendFile(pathString);
    });
});

app.get("/*", function(request, response) {
  response.sendFile(__dirname + "/index.html");
  return;
});


function fixURL(url, opt) {
    var options = opt || {};
    if(typeof(options.removeQuestionMark) != "undefined" && options.removeQuestionMark)
      while (url.includes("?")) url = url.substring(0, url.indexOf('?'));
    while (url.startsWith("/")) url = url.substring(1);
    while (url.includes("../")) url = url.replace("..", "");
    while (endsWith(url, "/")) url = url.slice(0, -1);
    while (url.includes("//")) url = url.replace("//", "/");
    return url;
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
