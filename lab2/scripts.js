let b4 = document.querySelector(".b4");
let p4 = b4.querySelector("p");

let b5 = document.querySelector(".b5");
let p5 = b5.querySelector("p");

let b6 = document.querySelector(".b6");
let p6 = b6.querySelector("p");
my_storage = window.localStorage;


[p4.textContent, p5.textContent] = [p5.textContent, p4.textContent];


let b3 = document.querySelector(".b3");
let p3 = b3.querySelector("p");


function calculate_square() {
    let nums = b3.querySelectorAll(".from_user_value");
    let [a, b, c] = [Number(nums[0].value), Number(nums[1].value), Number(nums[2].value)];
    // let [a, b, c] = nums.map(x => Number(x.value));
    let p = (a + b + c) / 2;
    let s = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
    p3.textContent = Number.isFinite(s) ? s.toString() : "Incorrect data :(";
}

function detect_numbers() {
    let s = b3.querySelector(".from_user_numbers").value;
    if (s === "") {return alert("Уведіть спершу значення");}
    let nums = s.split(" ", 10).map(Number);
    let max = Math.max(...nums);
    let count = nums.filter(x => x === max).length.toString();
    createCookie("count", count);
    console.log(document.cookie);
    alert("Кількість максимальних чисел із отриманих значень: " + count);
}

// window.onbeforeunload = function(event) {
//     alert("text");
//     return "This does not work";
//     //https://developers.google.com/web/updates/2016/04/chrome-51-deprecations?hl=en#remove-custom-messages-in-onbeforeload-dialogs
// };

window.onload = function (ev) {
    if (readCookie("count") != null) {
        if (confirm("count=" + readCookie("count"))) {
            eraseCookie("count");
            alert("Cookie cleared");
        }
    }


    let ul = document.getElementById("cur_ul");
    let txt = my_storage.getItem("ul");
    let sarr = txt.split(":");
    // with no last empty element in array [... , ""]
    for (let i = 0; i < sarr.length - 1; i++) {
        let li = document.createElement("li");
        li.id = "cur_li";
        let txt = document.createTextNode(sarr[i]);
        li.appendChild(txt);
        ul.appendChild(li);


    }


    let storage_bold = my_storage.getItem("bold");
    if (storage_bold === "1") {
        return p6.innerHTML = "<b>" + p6.textContent + "</b>";
    } else if (storage_bold === "0") {
        return p6.innerHTML = p6.textContent;
    }
};

window.onscroll = function() {
    let active_radio = document.querySelector('input[name="bolding"]:checked');
    if (active_radio != null) {
        let active_radio_value = active_radio.value;
        if (active_radio_value === "1") {
            p6.innerHTML = "<b>" + p6.textContent + "</b>";
            my_storage.setItem("bold", "1");
        }
        else if (active_radio_value === "0") {
            p6.innerHTML = p6.textContent;
            my_storage.setItem("bold", "0");
        }
    }
}

function clear_ul() {
    let ul = document.getElementById("cur_ul");
    let txt = "";
    for (let i = 0; i < ul.children.length; i++) {
        txt += ul.children[i].textContent + ":";
    }
    my_storage.setItem("ul", txt);
    b5.removeChild(ul);
}

function select_text() {
    let ul = document.getElementById("cur_ul");
    if (ul == null) {
        ul = document.createElement("ul");
        ul.id = "cur_ul";
        b5.appendChild(ul);
    }
    let li = document.createElement("li");
    li.id = "cur_li";
    let txt = document.createTextNode("some text here");

    li.appendChild(txt);
    ul.appendChild(li);
}
