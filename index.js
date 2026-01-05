// let string = "";

// // Detecting button press
// let buttons = document.querySelectorAll(".item");

// let input = document.querySelector(".input");

// for(let i = 0; i<buttons.length; i++){
//     buttons[i].addEventListener("click", function(){
//         // console.log(this.innerHTML)
//         if (this.innerHTML == "="){
//             try{
//                 string = eval(string);
//                 input.value = string;
//             }
//             catch{
//                 input.value = "Error";
//                 string = "";
//             }
//         }
//         else if(this.innerHTML == "AC"){
//             string = "";
//             input.value = string;
//         }
//         else{
//             string = string + this.innerHTML;
//             input.value = string;
//         }
//     })
// }


let string = "";

// Detecting button press
let buttons = document.querySelectorAll(".item");

let input = document.querySelector(".input");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        calculate(this.innerHTML);
    })
}

// Detecting key press
document.addEventListener("keydown", function (e) {
    calculate(e.key);
})

function calculate(inputs) {
    // for Enter or =
    if (inputs === "=" || inputs === "Enter") {
        try {
            string = eval(string);
            input.value = string;
        }
        catch {
            input.value = "Error";
            string = "";
        }
    }

    // for AC
    else if (inputs === "AC") {
        string = "";
        input.value = string;
    }

    // for Backspace
    else if (inputs === "Backspace") {
        string = string.slice(0, -1);
        input.value = string;
    }

    // Allowed characters only
    else if("0123456789+-*/.".includes(inputs)){
        string = string + inputs;
        input.value = string;
    }
}
