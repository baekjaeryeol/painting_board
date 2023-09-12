const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 750;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

/* true면 선을 그리고 false면 그리지 않는다 */
let isPainting = false;

/* 마우스 움직이기 */
canvas.addEventListener("mousemove", (event) => {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);   /* 마우스를 누른 곳에서 움직이는 쪽으로 선을 그음 */
        ctx.stroke();
        ctx.beginPath();
    }
    ctx.moveTo(event.offsetX, event.offsetY);   /* 연필을 마우스가 있는 쪽으로 움직임 */
})

/* 마우스 누르고 있기 */
canvas.addEventListener("mousedown", () => {
    isPainting = true;
})

/* 마우스 떼기 */
canvas.addEventListener("mouseup", () => {
    isPainting = false;
})

/* 마우스가 범위를 벗어났을 때 */
canvas.addEventListener("mouseleave", () => {
    isPainting = false;
})