let resetScreen = true;
let iteration = 0;
const elemBtnCalc = document.getElementById("btn-calc");
const elemCalcScreen = document.getElementById("calc-screen");
let height = 0;
let weight = 0;

function addDigit(digit) {           
    if (resetScreen) {
        elemCalcScreen.innerHTML = digit;
        resetScreen = false;
        elemCalcScreen.classList.remove("transparent-text");
    } else {
        elemCalcScreen.innerHTML += digit;
    }
}

function btnBackSpace() {
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = calcScreen.slice(0, -1);
    elemCalcScreen.innerHTML = calcScreen;
}

function addValue() {
    let calcScreen = elemCalcScreen.innerHTML;
    eval(calcScreen/100);
    if (iteration === 0){
        height = calcScreen/100;
        iteration++;
        elemCalcScreen.innerHTML = "Input Weight(kg) Here";
        elemCalcScreen.classList.add("transparent-text");
        resetScreen = true;
    } else if(iteration===1){
        weight = calcScreen;
        elemCalcScreen.innerHTML = `Your BMI:${weight/(height*height)}`;
        elemCalcScreen.classList.add("transparent-text");
    }

}




