const screen = document.getElementById('screen');
const del = document.getElementById('del');
const reset = document.getElementById('reset');
const equal = document.getElementById('equal');

const sum = document.getElementById('sum');
const sub = document.getElementById('sub');
const mult = document.getElementById('mult');
const div = document.getElementById('div');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const dec = document.getElementById('dec');
let operandoa, operandob, operacion, res = 0;

one.addEventListener('click', (e) => {
  screen.textContent = screen.textContent + one.value;
});
two.addEventListener('click', (e) => {
  screen.textContent = screen.textContent + two.value;
});
three.addEventListener('click', (e) => {
  screen.textContent = screen.textContent + three.value;
});
four.addEventListener('click', (e) => {
  screen.textContent = screen.textContent + four.value;
});
five.addEventListener('click', (e) => {
  screen.textContent = screen.textContent + five.value;
});
six.addEventListener('click', (e) => {
  screen.textContent = screen.textContent + six.value;
});
seven.addEventListener('click', (e) => {
  screen.textContent = screen.textContent + seven.value;
});
eight.addEventListener('click', (e) => {
  screen.textContent = screen.textContent + eight.value;
});
nine.addEventListener('click', (e) => {
  screen.textContent = screen.textContent + nine.value;
});
zero.addEventListener('click', (e) => {
  screen.textContent = screen.textContent + zero.value;
});
dec.addEventListener('click', (e) => {
  screen.textContent = screen.textContent + dec.value;
});

sum.addEventListener('keydown', (e) => {
  // screen.textContent = screen.textContent + sum.textContent;
  console.log(e.key);
  operandoa = screen.textContent;
  operacion = "+";
  delet();
  e.stopImmediatePropagation();
});

sub.addEventListener('click', (e) => {
  operandoa = screen.textContent;
  operacion = "-";
  delet();
});

mult.addEventListener('click', (e) => {
  // screen.textContent = screen.textContent;
  operandoa = screen.textContent;
  operacion = "x";
  delet();
});

div.addEventListener('click', (e) => {
  operandoa = screen.textContent;
  operacion = "/";
  delet();
});

del.addEventListener('click', (e) => {
  delet();
});

reset.addEventListener('click', (e) => {
  resetear();
});

equal.addEventListener('click', (e) => {
  operandob = screen.textContent;
  console.log(operandob);
  if (isNaN(screen.textContent) || screen.textContent !== "" || screen.textContent != ".") {
    resolve();
  }
  else{
    alert('Por favor ingrese valores para realizar los cálculos.');
  }
});

const delet = () => {
  screen.textContent = "";
}

const resetear = () => {
  screen.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

const resolve = () => {
  if (operacion === '.') {
    
  }
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "x":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
    default:
      res = parseFloat(operandob); // si no tiene operandoa
  }
  delet();
  screen.textContent = res.toLocaleString('es-MX');
  console.log(res);
}