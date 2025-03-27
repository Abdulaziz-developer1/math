//////////////////////////////////////////////////inputs
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const inp3 = document.getElementById('inp3');
const inp4 = document.getElementById('inp4');
const inp5 = document.getElementById('inp5');
const inp6 = document.getElementById('inp6');
const inp7 = document.getElementById('inp7');
const inp8 = document.getElementById('inp8');
const inp9 = document.getElementById('inp9');
const inp10 = document.getElementById('inp10');
const inp11 = document.getElementById('inp11');
const inp12 = document.getElementById('inp12');
const inp13 = document.getElementById('inp13');
const inp14 = document.getElementById('inp14');

/////////////////////////////////////////////////btns
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn10 = document.getElementById('btn10');

/////////////////////////////////////////////////result p's
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const result4 = document.getElementById('result4');
const result5 = document.getElementById('result5');
const result6 = document.getElementById('result6');
const result7 = document.getElementById('result7');
const result8 = document.getElementById('result8');
const result9 = document.getElementById('result9');
const result10 = document.getElementById('result10');

////functions
function myFunction(inp, result, amal) {
    result.innerText = amal(Number(inp.value));
}

function myFunction2(inp, inp2, inp3, result, amal) {
    result.innerText = amal(Number(inp.value), Number(inp2.value), Number(inp3.value));
}

function myFunction3(inp, inp2, result, amal) {
    const num1 = Number(inp.value);
    const num2 = Number(inp2.value);
    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Invalid inputs";
        return;
    }
    result.textContent = amal(num1, num2);
}


////events
btn1.addEventListener('click', () => myFunction(inp1, result1, Math.round));
btn2.addEventListener('click', () => myFunction(inp2, result2, Math.floor));
btn3.addEventListener('click', () => myFunction(inp3, result3, Math.ceil));
const inp15 = document.getElementById('inp15');  // Make sure this exists in your HTML!

// Fix the pow function
btn4.addEventListener('click', () => {
    const base = Number(inp4.value);
    const exponent = Number(inp15.value);  // Now using the correct inp15
    
    if (inp15.value.trim() === '') {
        result4.textContent = "Please enter an exponent!";
        return;
    }
    
    if (isNaN(base) || isNaN(exponent)) {
        result4.textContent = "Invalid input!";
        return;
    }
    
    result4.textContent = Math.pow(base, exponent);
});
btn5.addEventListener('click', () => myFunction(inp5, result5, Math.sqrt));
btn6.addEventListener('click', () => myFunction(inp6, result6, Math.abs));
btn7.addEventListener('click', () => { result7.innerText = Math.random().toFixed(1); });
btn8.addEventListener('click', () => myFunction(inp8, result8, Math.trunc));
btn9.addEventListener('click', () => myFunction2(inp9, inp10, inp11, result9, Math.min));
btn10.addEventListener('click', () => myFunction2(inp12, inp13, inp14, result10, Math.max));