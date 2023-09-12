const saveBtn = document.querySelector("#save")

saveBtn.addEventListener("click", () => {
    const url = canvas.toDataURL();
    const a = document.createElement("a");

    a.href = url;
    a.download = "내그림.png";
    a.click();
})