const $start = document.getElementById("start");
const $type = document.getElementById("type");
const $delete = document.getElementById("delete");
const $clear = document.getElementById("clear");
const $submit = document.getElementById("submit");
const $input = document.getElementById("input");

const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 "

let lastClick = Number(new Date().getTime());
const updateTimer = () => {
    const newtime = Number(new Date().getTime());
    const time = newtime - lastClick;
    lastClick = newtime;
    return time;
}
const updateInput = () => {
    $input.innerText = string;
}

let string = "";

$start.addEventListener("click", e => {
    updateTimer();
    updateInput();
});
$type.addEventListener("click", e => {
    const time = updateTimer();
    const letterID = parseInt(time/1000) % 37;
    const letter = alpha[letterID];
    string = string.concat(letter);
    updateInput();
});
$delete.addEventListener("click", e => {
    updateTimer();
    string = string.slice(0, -1);
    updateInput();
});
$clear.addEventListener("click", e => {
    updateTimer();
    string = "";
    updateInput();
});
$submit.addEventListener("click", e => {
    location.href = `https://www.google.com/search?q=${encodeURI(string)}`;
});