const range = document.querySelector('.range');
const root  = document.querySelector(':root');
const output = document.querySelector('#value');
output.innerHTML = slider.value;

range.addEventListener('input', function() {
    root.style.setProperty('--font-pruning', this.value);
    output.innerHTML = this.value;

    if (this.value > 0) {
        root.style.setProperty('--tree2', "0%");
    } else {
        //Change the text back if slider is not greater than 0.
        root.style.setProperty('--tree2', "100%");
    }

    if (this.value > 10) {
        root.style.setProperty('--tree3', "0%");
    } else {
        //Change the text back if slider is not greater than 0.
        root.style.setProperty('--tree3', "100%");
    }

    if (this.value > 20) {
        root.style.setProperty('--tree4', "0%");
    } else {
        //Change the text back if slider is not greater than 0.
        root.style.setProperty('--tree4', "100%");
    }
    
    if (this.value > 30) {
        root.style.setProperty('--tree5', "0%");
    } else {
        //Change the text back if slider is not greater than 0.
        root.style.setProperty('--tree5', "100%");
    }
    
    if (this.value > 40) {
        root.style.setProperty('--tree6', "0%");
    } else {
        //Change the text back if slider is not greater than 0.
        root.style.setProperty('--tree6', "100%");
    }

    if (this.value > 50) {
        root.style.setProperty('--tree7', "0%");
    } else {
        //Change the text back if slider is not greater than 0.
        root.style.setProperty('--tree7', "100%");
    }

    if (this.value > 60) {
        root.style.setProperty('--tree8', "0%");
    } else {
        //Change the text back if slider is not greater than 0.
        root.style.setProperty('--tree8', "100%");
    }


    if (this.value > 70) {
        root.style.setProperty('--tree9', "0%");
    } else {
        //Change the text back if slider is not greater than 0.
        root.style.setProperty('--tree9', "100%");
    }

    if (this.value > 80) {
        root.style.setProperty('--tree10', "0%");
    } else {
        //Change the text back if slider is not greater than 0.
        root.style.setProperty('--tree10', "100%");
    }

    if (this.value > 90) {
        root.style.setProperty('--tree11', "0%");
    } else {
        //Change the text back if slider is not greater than 0.
        root.style.setProperty('--tree11', "100%");
    }

    if (this.value > 95) {
        root.style.setProperty('--blink', "blinkingText 4s infinite");
    } else {
        //Change the text back if slider is not greater than 0.
        root.style.setProperty('--blink', "none");
    }
});






