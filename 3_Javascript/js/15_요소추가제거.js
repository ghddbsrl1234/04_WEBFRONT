const addBtn = document.querySelector("#add");
const calcBtn = document.querySelector("#calc");
const container = document.querySelector(".container");

addBtn.addEventListener("click", () => {

  const row = document.createElement("div");
  row.classList.add("row");

  const input = document.createElement("input");
  // input.type = "number";
  input.setAttribute("type","number");
  // input.classList.add("input-number");
  input.setAttribute("class", "input-number");

  const removeBtn = document.createElement("span");
  removeBtn.classList.add("remove-row");
  removeBtn.innerText = "❌";
  // span 태그 내용으로 &times; 사용할 시 innerHTML 사용한다.

  removeBtn.addEventListener("click", (e) => {

    // 이벤트가 발생한 요소의 부모 요소를 탐색

    const parent = e.target.parentElement;
    // 그냥 함수 선언을했으면 this로 이벤트 발생 요소에 접근 가능하였겠지만 
    // () => 화살표 함수 선언을 하였기떄문에 ()에 이벤트 발생 요소 매개변수를 작성해 주고 
    // 매개변수.target으로 접근해준다.
    parent.remove();

    // row.remove(); 
    // // 부모가 row인걸 안다면 바로 row.remove();를 사용해도되겠지만 혹시 모를 상황에 안전하게 부모를 찾아준다.
  });

  row.append(input, removeBtn);
  container.append(row);
});

calcBtn.addEventListener("click", () => {

  const inputs = container.querySelectorAll(".input-number");
  let sum = 0;

  for (let i = 0; i < inputs.length; i++) {
    sum += Number(inputs[i].value);
  }
  alert(`합계 : ${sum}`);
});

