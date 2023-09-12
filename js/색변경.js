const color = document.querySelector("#color");
/* Array.from: 자바스크립드의 배열로 생성하기 */
const colorOptions = Array.from(
    document.querySelectorAll(".color-option")
);

color.addEventListener("change", (event) => {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
})

/* colorOptions는 HTML컬랙션이지 Array가 아님 */
colorOptions.forEach((color) =>
    color.addEventListener("click", (event) => {
        const colorValue = event.target.dataset.color;
        
        ctx.strokeStyle = colorValue;
        ctx.fillStyle = colorValue;
        color.value = colorValue;
        console.log(color.value);
}));
