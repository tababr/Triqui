function turno(player1) {

    if (player1 === true) {
        document.getElementById("player1_title").style.fontSize = '30px';
        document.getElementById("player2_title").style.fontSize = '18px';
    }
    else {
        document.getElementById("player1_title").style.fontSize = '18px';
        document.getElementById("player2_title").style.fontSize = '30px';
    }
}

export default turno;