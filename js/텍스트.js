const textInput = document.querySelector("#text")
const fontSize = document.querySelector("#fontSize")
const fontTypes = document.querySelector("#fontTypes")
const fontWeights = document.querySelector("#fontWeights");

canvas.addEventListener("dblclick", (event) => {
    const text = textInput.value;
    
    if (text !== "") {
        ctx.save(); /* save와 restore 사이에서 어떤 수정을 해도 저장되지 않음 */

        const fontSizeValue = fontSize.value;
        const fontTypesValue = fontTypes.value;
        const fontWeightsValue = fontWeights.value;
        
        ctx.lineWidth = 1;
        ctx.font = `${fontWeightsValue} ${fontSizeValue}px ${fontTypesValue}`;
        ctx.fillText(text, event.offsetX, event.offsetY);

        ctx.restore();
    }
})
