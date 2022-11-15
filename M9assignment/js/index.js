var mybutton = document.querySelector("button");
var size = document.getElementById("size");
var color = document.getElementById("colorSelected");

mybutton.addEventListener("click", function (event) {
    var element = document.getElementsByTagName("div");
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }

    // Let us stop the propagation of events

    event.stopPropagation();
});

addEventListener("click", addDot);


function addDot(event) {
    var dot = document.createElement("div");

    if (event.pageX<78 && event.pageY<78) {
        dot.className = "";
    } else {
        dot.className = "dot";
        dot.style.left = (event.pageX - 4) + "px";
        dot.style.top = (event.pageY - 4) + "px";
        dot.style.borderColor = color.value;
        dot.style.borderWidth = size.value + "px";

        document.body.appendChild(dot);
    }

}







