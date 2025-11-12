// prmopt 사용연습

function test() {
    const password = prompt("비밀번호를 입력하세요");

    console.log(password);

    // 확인 -> 입력한 값이 문자열로 저장
    // 취소 -> null

    if(password = null) { // 취소
        alert("취소")

    }  else { // 확인

        if(password == '1234') { // 비밀번호가 같을 경우
            alert("비밀번호 일치");
        } else { // 비밀번호가 다를 경우
            alert("비밀번호 불일치")
        }

    }
}

