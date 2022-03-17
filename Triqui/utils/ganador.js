function winPlayer1(score1) {
    // document.getElementById("texto").style.fontSize = '18px';
    document.getElementById("player2_title").style.fontSize = '18px';
    const score_1 = document.getElementById("score_1");
    const score_1m = document.getElementById("score_1m");
    score_1.innerText = score1;
    score_1m.innerText = score1;

    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = false;
    nextButton.style.backgroundColor = "#477bae";
    nextButton.style.cursor = "pointer";

    for (var i = 1; i < 10; i++) {
        let string = "button_active" + i;
        document.getElementById(string).disabled = true;
    }

}

function winPlayer2(score2) {
    // document.getElementById("texto").style.fontSize = '18px';
    document.getElementById("player2_title").style.fontSize = '18px';
    const score_2 = document.getElementById('score_2');
    const score_2m = document.getElementById('score_2m');
    score_2.innerText = score2;
    score_2m.innerText = score2;

    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = false;
    nextButton.style.backgroundColor = "#477bae";
    nextButton.style.cursor = "pointer";

    for (var i = 1; i < 10; i++) {
        let string = "button_active" + i;
        document.getElementById(string).disabled = true;
    }

}

export { winPlayer1, winPlayer2 };