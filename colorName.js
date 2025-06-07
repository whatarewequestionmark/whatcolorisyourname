const alphabetMap = new Map();

addEventListener("DOMContentLoaded", function(){

    document.getElementById("button").addEventListener("click", function(){
        buttonClicked();
    });

    document.getElementById("first").addEventListener('keypress', function(e){
        if (e.key === 'Enter') {
            document.getElementById("button").click();
        }
    });

    document.getElementById("middle").addEventListener('keypress', function(e){
        if (e.key === 'Enter') {
            document.getElementById("button").click();
        }
    });

    document.getElementById("last").addEventListener('keypress', function(e){
        if (e.key === 'Enter') {
            document.getElementById("button").click();
        }
    });





});

function calculateOpposite(color){
    console.log(255-color)
    console.log(color)
    return 255 - color;

}

const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function getValue(n){
    let value = 0;
    let name = n.replace(/ /g, "").toLowerCase();
    for(let i = 0; i < name.length; i++){
        value += alphabetMap.get(name[i]);
    }

    value *= 4;
    while(value > 255){
        value -= 256;
    }
    return value;
}

function buttonClicked(){
    let first = document.getElementById("first").value;
    let middle = document.getElementById("middle").value;
    let last = document.getElementById("last").value;



    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(97 + i);
        alphabetMap.set(letter, i+1);
    }

    for(let i = 0; i < 32; i++){
        const letter2 = String.fromCharCode(224 + i);
        alphabetMap.set(letter2, i+27)
    }


    let red = getValue(first);
    let green = getValue(middle);
    let blue = getValue(last);


    document.body.style.backgroundColor = rgbToHex(red, green, blue);

    document.body.style.color = rgbToHex(calculateOpposite(red), calculateOpposite(green), calculateOpposite(blue))



    document.getElementById("hex").innerText = rgbToHex(red, green, blue);
    document.getElementById("rgb").innerText = "rgb(" + red + ", " + green + ", " + blue + ")";
}
