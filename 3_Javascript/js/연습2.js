const widthInput = document.querySelector("#width");
const heightInput = document.querySelector("#height");
const colorInput = document.querySelector("#color");
const alignInput = document.querySelector("#align");
const contentInput = document.querySelector("#content");

const applyBtn = document.querySelector("#apply");
const regBtn = document.querySelector("#registration");
const result = document.querySelector("#result");


applyBtn.addEventListener("click", () => {
    const width = Number(widthInput.value);
    const height = Number(heightInput.value);
    const color = colorInput.value;
    const align = alignInput.value;

    contentInput.style.width = width + "px";
    contentInput.style.height = height + "px";

    contentInput.style.color = color;
    contentInput.style.textAlign = align;

    contentInput.style.fontSize = "18px";
    contentInput.style.padding = "10px";
});


regBtn.addEventListener("click", () => {

    const width = Number(widthInput.value);
    const height = Number(heightInput.value);
    const color = colorInput.value;
    const align = alignInput.value;
    const text = contentInput.value.trim();

    if (text.length === 0) {
        alert("내용을 입력하세요!");
        contentInput.focus();
        return;
    }

    const box = document.createElement("div");

    box.style.width = width + "px";
    box.style.height = height + "px";

    box.style.border = "1px solid #000";
    box.style.marginTop = "12px";
    box.style.fontSize = "18px";

    box.textContent = text;
    box.style.color = color;
    box.style.textAlign = align;

    box.style.display = "flex";
    box.style.alignItems = "center";
    if (align === "left") {
        box.style.justifyContent = "flex-start";
    } else if (align === "right") {
        box.style.justifyContent = "flex-end";
    } else {
        box.style.justifyContent = "center";
    }


    result.append(box);
});
