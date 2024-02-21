//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    var paths = document.querySelectorAll("#developmentPaths li");
    paths.forEach(function(path) {
        path.textContent += " development";
    });
});