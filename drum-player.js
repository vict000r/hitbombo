// SIMPLIFICAR FUNCIÓN






function play1() {
    var audio = document.getElementById('');
    if (audio.paused) {
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0
    }
}

















/*
function play() {
    let soundelement = document.getElementById("boom");
    soundelement.play();
    // función reiniciar audio
}

function play2() {
    let soundelement = document.getElementById("clap");
    soundelement.play();
}

function play3() {
    let soundelement = document.getElementById("hihat");
    soundelement.play();
}

function play4() {
    let soundelement = document.getElementById("kick");
    soundelement.play();
}

function play5() {
    let soundelement = document.getElementById("openhat");
    soundelement.play();
}

function play6() {
    let soundelement = document.getElementById("ride");
    soundelement.play();
}

function play7() {
    let soundelement = document.getElementById("snare");
    soundelement.play();
}

function play8() {
    let soundelement = document.getElementById("tink");
    soundelement.play();
}
*/