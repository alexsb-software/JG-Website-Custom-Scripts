/**
 * This script should be in the parent page, in which
 * `tabs.html` is included.
 */

// JG17 webpage iframe height modification script
window.onload = function () {
    var x = document.getElementById("jg17-webpage-frame");
    x.height = x.contentDocument.body.clientHeight;

    var object = x.contentDocument.getElementById("tab1");
    object.addEventListener("click", adjustHeight);

    var object = x.contentDocument.getElementById("tab2");
    object.addEventListener("click", adjustHeight);

    var object = x.contentDocument.getElementById("tab3");
    object.addEventListener("click", adjustHeight);

    var object = x.contentDocument.getElementById("tab4");
    object.addEventListener("click", adjustHeight);

    var object = x.contentDocument.getElementById("tab5");
    object.addEventListener("click", adjustHeight);
}
  
function adjustHeight() {
    var x = document.getElementById("jg17-webpage-frame");
    x.height = x.contentDocument.body.clientHeight;
}