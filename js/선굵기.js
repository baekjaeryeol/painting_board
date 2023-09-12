const lineWidth = document.querySelector("#line-width");

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";  /* 선 끝을 둥굴게 */

lineWidth.addEventListener("change", (event) => {
    ctx.lineWidth = event.target.value;
})