const body = document.querySelector('body');
const clSwitch1 = document.getElementById('switch1');
const clSwitch2 = document.getElementById('switch2');
const clSwitch3 = document.getElementById('switch3');

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

clSwitch1.addEventListener('click', (e) => {
  body.className = '';
});

clSwitch2.addEventListener('click', (e) => {
  body.className = 'theme2';
});

clSwitch3.addEventListener('click', (e) => {
  body.className = 'theme3';
});

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

sum.addEventListener('click', (e) => {
  validOperando(operandoa);
  operacion = "+";
  delet();
  sum.setAttribute('disabled', '');
});

sub.addEventListener('click', (e) => {
  validOperando(operandoa); 
  operacion = "-";
  delet();
  sub.setAttribute('disabled', '');
});

mult.addEventListener('click', (e) => {
  validOperando(operandoa); 
  operacion = "x";
  delet();
  mult.setAttribute('disabled', '');
});

div.addEventListener('click', (e) => {
  validOperando(operandoa);
  operacion = "/";
  delet();
  div.setAttribute('disabled', '');
});

del.addEventListener('click', (e) => {
  delet();
});

reset.addEventListener('click', (e) => {
  resetear();
});

equal.addEventListener('click', (e) => {
  validOperando(operandob); 
  console.log(validOperando(operandob));
    resolve();
});

const validOperando = (x) => {
  x = screen.textContent;
  console.log(x);
  if (x === undefined) {
    x = 0;
  }

  if (x === NaN) {
    x = 0;
  }

  if (x === '') {
    x = 0;
    console.log(x);
  }
  return x;
}

const delet = () => {
  screen.textContent = "";
  resetDisabled();
}

const resetear = () => {
  operandoa = 0;
  operandob = 0;
  operacion = "";
  delet();
}

const resetDisabled = () => {
  sum.removeAttribute('disabled');
  sub.removeAttribute('disabled');
  mult.removeAttribute('disabled');
  div.removeAttribute('disabled');
}

const resolve = () => {
  // if (operandob != '') {
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        sum.removeAttribute('disabled');
        break;
      case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        sub.removeAttribute('disabled');
        break;
      case "x":
        res = parseFloat(operandoa) * parseFloat(operandob);
        mult.removeAttribute('disabled');
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        div.removeAttribute('disabled');
        break;
      // default:
        // res = parseFloat(validOperando(operandoa)); // si no tiene operandoa
        // resetear();
    }
  // }
  // else {

  // }

  resetear();
  screen.textContent = res.toLocaleString('es-MX');
  console.log(res);
}