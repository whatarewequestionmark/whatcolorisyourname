

addEventListener("DOMContentLoaded", function(){


    document.getElementById("button").addEventListener("click", function(){

        let first = document.getElementById("first").value;
        let middle = document.getElementById("middle").value;
        let last = document.getElementById("last").value;

        const alphabetMap = new Map();

        for (let i = 0; i < 26; i++) {
            const letter = String.fromCharCode(97 + i);
            alphabetMap.set(letter, i+1);
        }

        for(let i = 0; i < 32; i++){
            const letter2 = String.fromCharCode(224 + i);
            alphabetMap.set(letter2, i+27)
        }


        console.log([...alphabetMap.entries()]);

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

        const rgbToHex = (r, g, b) => {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        }

        let red = getValue(first);
        let green = getValue(middle);
        let blue = getValue(last);

        console.log(rgbToHex(red, green, blue));
        document.body.style.backgroundColor = rgbToHex(red, green, blue);

        document.body.style.color = rgbToHex(calculateOpposite(red), calculateOpposite(green), calculateOpposite(blue))

        function calculateOpposite(color){
            return 255 - color;
        }

        document.getElementById("hex").innerText = rgbToHex(red, green, blue);
        document.getElementById("rgb").innerText = "rgb(" + red + ", " + green + ", " + blue + ")";
    });




});
