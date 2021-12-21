const buttons = document.querySelectorAll(".universalButton");


window.addEventListener("load", function (){
    for (const button of buttons) {
        const nodeName = button.id + "P";
        const textNode = document.getElementById(nodeName);
        button.onclick = function () {
            if (textNode.classList.contains("show")) {
                textNode.classList.remove("show");
            } else {
                textNode.classList.add("show");
            }
        };
    }
    console.log("finished buttons");
});


