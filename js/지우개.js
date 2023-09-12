const deleteAllBtn = document.querySelector("#deleteAll-btn");
const eraserBtn = document.querySelector("#eraser-btn");

const ERASER_COLOR = "white";

deleteAllBtn.addEventListener("click", () => {

    if (confirm("확인을 누르면 진행중인 모든 작업이 초기화 됩니다.") === true) {
        ctx.fillStyle = ERASER_COLOR;
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    } else {
        return false
    }
})

eraserBtn.addEventListener("click", () => {    
    ctx.strokeStyle = ERASER_COLOR;
    isFilling = false;
    modeBtn.innerText = "채우기"
})