const btn_start = document.querySelector("#btn_start");


function myMove() {
    let elem = document.querySelector(".animation_field")
    let pos = 0;
    let id = setInterval(moveDown, 30);

    function moveDown() {
        if (pos >= 350) {
            clearInterval();
            id = setInterval(moveUp, 30);
        } else {
            pos += 2;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }

    function moveUp() {
        if (pos <= 0) {
            clearInterval();
            id = setInterval(moveDown, 30);
        } else {
            pos -= 2;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}


const work = document.getElementById("work");
const textForLogs = document.getElementById("text_for_logs");

function removeWorkHide() {
    work.classList.remove("work_hide");
    saveLocalStorage("show window");
}

function addWorkHide() {
    work.classList.add("work_hide");
    saveLocalStorage("hide window");
    textForLogs.textContent = localStorage.getItem("logging");
}

const anim = document.getElementById("anim");
const canvas = document.getElementById("canvas");

const start = document.getElementById("work_start");
const stop = document.getElementById("work_stop");
const reload = document.getElementById("work_reload");
const logField = document.getElementById("log_field");


let breakFlag = false;
function startAnimation() {
    start.disabled = true;
    stop.disabled = false;
    reload.disabled = true;
    canvas.width = anim.offsetWidth - 10; // minus border two times
    canvas.height = anim.offsetHeight - 10;
    let blueSquare = canvas.getContext("2d");
    let redSquare = canvas.getContext("2d");
    let x = getRandomInteger(0, canvas.width);
    let y = canvas.height;
    let down = true;
    let right = false;
    let p = canvas.width;
    let q = getRandomInteger(0, canvas.height);
    let aDown = true;
    let aRight = true;

    let timerId = setInterval(draw, 10);

    function draw() {
        blueSquare.clearRect(0, 0, canvas.width, canvas.height);
        blueSquare.fillRect(x, y, 40, 40);
        blueSquare.fillStyle = "#0095DD";
        blueSquare.fill();

        redSquare.fillRect(p, q, 20, 20);
        redSquare.fillStyle = "#c20f0f";
        redSquare.fill();

        if (y > canvas.height - 40) {
            down = false; // minus half height of square
            logField.textContent = "red down";
            saveLocalStorage("red down");
        }
        if (x > canvas.width - 40) {
            right = false;
            logField.textContent = "red right";
            saveLocalStorage("red right");
        }
        if (y < 0) {
            down = true;
            logField.textContent = "red up";
            saveLocalStorage("red up");
        }
        if (x < 0) {
            right = true;
            logField.textContent = "red left";
            saveLocalStorage("red left");
        }

        if (q > canvas.height - 20) {
            aDown = false;  // minus half height of square
            logField.textContent = "blue down";
        }
        if (p > canvas.width - 20) {
            aRight = false;
            logField.textContent = "blue right";
        }
        if (q < 0) {
            aDown = true;
            logField.textContent = "blue up";
        }
        if (p < 0) {
            aRight = true;
            logField.textContent = "blue left";
        }

        x += right ? 2 : -2;
        y += down ? 3 : -3;

        p += aRight ? 4 : -4;
        q += aDown ? 3 : -3;

        if (breakFlag || Math.abs(x - p) < 40 && Math.abs(y - q) < 40) {
            breakFlag = false;
            clearInterval(timerId);
            stop.disabled = true;
            reload.disabled = false;
            logField.textContent = "waiting...";
        }
    }
}

function stopAnimation() {
    breakFlag = true;
    reload.disabled = false;
}

function reloadAnimation() {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    startAnimation();
}

function getRandomInteger(min, max) {
    return Math.random() * (max - min) + min;
}

function saveLocalStorage(text) {
    let previous = localStorage.getItem("logging");
    localStorage.setItem("logging", previous + text + Date.now());
}