$(document).ready(function() {
    const body = $("body");
    body.css("background-color", "#94bdff");
    const titleName = $(".title.typed");
    let string = "Hello, My name is Manoj Kumar";
    let words = string.split("");
    let currentIndex = 0;
    let isFaded = false;
    let titleInterval = setInterval(function() {
        if (currentIndex < words.length) {
            titleName.append(words[currentIndex]);
            currentIndex++;
        } else {
            titleName.css("border-right", "none");
            isFaded = true;
            clearInterval(titleInterval);
        }
    }, 200);
    let fadeInterval = setInterval(() => {
        if (currentIndex < words.length) {
            if (isFaded) {
                titleName.css("border-right", "5px solid white");
                isFaded = false;
            } else {
                titleName.css("border-right", "none");
                isFaded = true;
            }
        } else {
            clearInterval(fadeInterval);
        }
    }, 100);
});