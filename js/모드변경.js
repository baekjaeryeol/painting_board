const modeBtn = document.querySelector("#mode-btn");

let isFilling = false;

modeBtn.addEventListener("click", () => {
    if (isFilling === true) {
        isFilling = false;
        modeBtn.innerText = `채우기 Click !`
    } else {
        isFilling = true;
        modeBtn.innerText = `연필 Click !`
    }
})

canvas.addEventListener("click", () => {
    if (isFilling === true) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    }
})