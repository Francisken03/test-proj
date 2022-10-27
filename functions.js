/* 
    ITEM ZOOM EFFECT ON MOUSE EVENT POINTER
    Check jquery function .animate --Mont's suggestion.

    Check xzoom javascript function

*/
var options = {
    width: 350,
    // fillContainer: true,
    zoomWidth: 500,
    offset: {vertical: 0, horizontal: 10},
    scale: .8
}

new ImageZoom(document.getElementById("img-1"), options);