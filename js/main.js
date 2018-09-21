var targetObject = document.getElementById("target");

function js_ramdom(start, end) {
    var result = undefined;
    result = Math.floor((Math.random() * end) + start);
    return result;
}

function js_ChangeTextColor() {
    var dom_object = document.getElementById("target");
    var newValueProperty = "RGB(" + js_ramdom(1, 255) + ", " + js_ramdom(1, 255) + ", " + js_ramdom(1, 255) + ") !important;";
    dom_object.setAttribute("style", "color: " + newValueProperty);
    if ( dom_object.children.length > 0 ) {
        dom_object.children[0].setAttribute("style", "color: inherit !important;");
    }
}

function js_ChangeBackgroundColor() {
    var dom_object = document.getElementById("target");
    var newValueProperty = "RGB(" + js_ramdom(1, 255) + ", " + js_ramdom(1, 255) + ", " + js_ramdom(1, 255) + ") !important;";
    dom_object.setAttribute("style", "background-color: " + newValueProperty);
    if ( dom_object.children.length > 0 ) {
        dom_object.children[0].setAttribute("style", "background-color: inherit !important;");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn-collect").children[0].onclick = js_ChangeTextColor;
    document.querySelector(".btn-collect").children[1].onclick = js_ChangeBackgroundColor;
  });