const b4 = document.querySelector(".b4");
let buttons;


function createNewNode() {
    let buttonName = document.getElementById("forButtonName").value;
    let div = document.createElement("div");
    div.className = "divForSaving";
    let button = document.createElement("button");
    button.id = buttonName;
    const insideButton = document.createTextNode(buttonName);
    button.append(insideButton);
    button.classList.add("universalButton");
    // button.type = "button";

    let p = document.createElement("p");
    p.classList.add("collapse");
    p.id = buttonName + "P";

    let text = document.createTextNode("Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.");

    p.append(text);
    div.append(button);
    div.append(p);

    b4.append(div);


    buttons = document.querySelectorAll(".universalButton");
    console.log(buttons)


    // should invoke this part when add button

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
}

function saveDataOnServer() {
    console.log(buttons.toString())
    download(buttons.toString(), "file", "txt")
}

// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}


function localCopy() {
    window.localStorage.setItem("jsppart", b4.innerHTML); //all children div b4
    // createCookie("jsppart", b4.innerHTML, 1);
}


function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function javaRequest() {
    try {
        let xhr = new XMLHttpRequest();
        let toServer = b4.innerHTML;
        xhr.open("POST", "/backFrontOrganization_war/SerializationServlet", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.send(toServer);

        // let value = "this is test string";
        // let xhr = new XMLHttpRequest();
        // xhr.open("POST", "/backFrontOrganization_war/SerializationServlet", true);
        // xhr.setRequestHeader('Content-Type', 'application/json');
        // xhr.send(JSON.stringify({
        //     value: value
        // }));

        //
        // let xhr = new XMLHttpRequest();
        //
        // let json = JSON.stringify({
        //     name: "Вася",
        // });
        //
        // xhr.open("POST", '/backFrontOrganization_war/SerializationServlet')
        // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        //
        // xhr.send(json);

    } catch (err) {
        alert(err.message);
    }
    console.log("was sent to java");
}




