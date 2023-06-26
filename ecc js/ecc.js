let count = 0;
let countEL = document.getElementById("count-el");
console.log(countEL);

function increment() {
    count += 1;
    countEL.textContent = count;
    console.log(count);
}

increment();

function save() {
    let saveEl = document.getElementById("save-el");
    let prevEnt = count + " - ";
    saveEl.textContent += prevEnt;
    console.log(count);
    countEL.textContent = 0;
    count = 0;
}
save();