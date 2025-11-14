const boxes = document.querySelectorAll(".box");
const inputs = document.querySelectorAll(".color-input");
const btn = document.querySelector("changeButton");

btn.addEventListener("click", function() {
  for (let i = 0; i < inputs.length; i++) {
    boxes[i].style.backgroundColor = inputs[i].value;
  }
});

// 엔터 기능 ㅋ
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keydown", function(e) {
    if (e.key === "Enter") btn.click();
  });
}

// 이건 위에꺼 배열들 선언을 함수 안에서 하는 방법.
/*changeButton.onclick = function() {
  const containers = document.querySelectorAll(".container");

  for (let i = 0; i < containers.length; i++) {
    const box = containers[i].querySelector(".box");
    const input = containers[i].querySelector(".color-input");
    box.style.backgroundColor = input.value;
  }
};
*/