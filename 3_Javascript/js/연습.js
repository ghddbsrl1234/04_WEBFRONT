const sizeInput = document.getElementById("size");
const colorInput = document.getElementById("color");
const contentBox = document.getElementById("content");
const applyBtn = document.getElementById("apply");
const registerBtn = document.getElementById("registration");
const resultArea = document.getElementById("result");

applyBtn.addEventListener("click", () => {
    const size = sizeInput.value;
    const color = colorInput.value;

    if (size) {
        contentBox.style.fontSize = size + "px";
    }
    if (color) {
        contentBox.style.color = color;
    }
});

registerBtn.addEventListener("click", () => {
    const text = contentBox.value.trim();

    if (text.length === 0) {
        alert("내용을 입력하세요!");
        return;
    }

    const p = document.createElement("p");
    p.textContent = text;

    p.style.fontSize = contentBox.style.fontSize;
    p.style.color = contentBox.style.color;

    resultArea.appendChild(p);

    contentBox.value = "";
});
