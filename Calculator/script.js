const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
const operators = ["%", "/", "*", "-", "+", "="];
let output = "";

const calculate =(btn)=>{
    if(btn==="=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }
    else if(btn==="AC"){
        output = "";
    }
    else if(btn === "DEL"){
        output = output.toString().slice(0, -1);
    }
    else{
        if(output === "" && operators.includes(btn))return;
        output += btn;
    }
    screen.value=output
}

buttons.forEach((button) =>{
    button.addEventListener("click", (e)=>calculate(e.target.dataset.value));
});