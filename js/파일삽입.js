const fileInput = document.querySelector("#file")

fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)
    const image = new Image();  /* 이미지 태그 만들기 */
    image.src = url;
    image.addEventListener("load", () => {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        fileInput.value = null;
    })
})