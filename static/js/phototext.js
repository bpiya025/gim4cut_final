// 텍스트가 보여지는 기능
// 1. 몇 번째 사진에 마우스가 올라갔는지 확인(if문)
// 2. 해당 사진을 찾아 hideText class를 지워주고, showText는 삽입해줌
function showText(number) {
    if (number === 1) {
        document.querySelector("#desc1").classList.remove("hideText");
        document.querySelector("#desc1").classList.add("showText");
    } else if (number === 2) {
        document.querySelector("#desc2").classList.remove("hideText");
        document.querySelector("#desc2").classList.add("showText");
    } else if (number === 3) {
        document.querySelector("#desc3").classList.remove("hideText");
        document.querySelector("#desc3").classList.add("showText");
    } else if (number === 4) {
        document.querySelector("#desc4").classList.remove("hideText");
        document.querySelector("#desc4").classList.add("showText");
    }
    }
    
    // 텍스트가 감춰지는 기능
    function hideText(number) {
    if (number === 1) {
        document.querySelector("#desc1").classList.remove("showText");
        document.querySelector("#desc1").classList.add("hideText");
    } else if (number === 2) {
        document.querySelector("#desc2").classList.remove("showText");
        document.querySelector("#desc2").classList.add("hideText");
    } else if (number === 3) {
        document.querySelector("#desc3").classList.remove("showText");
        document.querySelector("#desc3").classList.add("hideText");
    } else if (number === 4) {
        document.querySelector("#desc4").classList.remove("showText");
        document.querySelector("#desc4").classList.add("hideText");
    }
    }