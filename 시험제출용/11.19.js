document.querySelector("#apply").addEventListener("click", () => {

    const box = document.querySelector("#result");

    const width = document.querySelector("#width").value;
    const height = document.querySelector("#height").value;
    const textSize = document.querySelector("#textSize").value;
    const textColor = document.querySelector("#textColor").value;
    const backgroundColor = document.querySelector("#backgroundColor").value;
    const content = document.querySelector("#content").value;

    let weight, Halig, Valig;

    const weightList = document.getElementsByName("weight");
    for (let i = 0; i < weightList.length; i++) {
        if (weightList[i].checked) {
            weight = weightList[i].value;
            break;
        }
    }

    const HaligList = document.getElementsByName("Halig");
    for (let i = 0; i < HaligList.length; i++) {
        if (HaligList[i].checked) {
            Halig = HaligList[i].value;
            break;
        }
    }

    const ValigList = document.getElementsByName("Valig");
    for (let i = 0; i < ValigList.length; i++) {
        if (ValigList[i].checked) {
            Valig = ValigList[i].value;
            break;
        }
    }


    if (width) box.style.width = width + "px";
    if (height) box.style.height = height + "px";

    if (textSize) box.style.fontSize = textSize + "px";

    if (textColor) box.style.color = textColor;
    if (backgroundColor) box.style.backgroundColor = backgroundColor;

    box.style.fontWeight = weight;

    if (Halig === "left") {
        box.style.justifyContent = "flex-start";
    } else if (Halig === "right") {
        box.style.justifyContent = "flex-end";
    } else {
        box.style.justifyContent = "center";
    }

    box.style.alignItems = Valig;

    box.textContent = content;
});
