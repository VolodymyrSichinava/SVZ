let transitionBlock = document.getElementById('transition');

function transition() {
  let top = -200;
  let transitionTimeTop = setInterval(() => {
    top = top + 1;
    transitionBlock.style.top = top + "vh";
    if (top === 200) {
      clearInterval(transitionTimeTop);
      transitionBlock.style.display = 'none';
    }
  }, 5);
}

let name = document.getElementById('name');
let nameArray = ['Volodymyr Sichinava', 'Markup Developer'];

function intervalToMin1() {                           //для удаления 'Volodymyr Sichinava'
  name.innerHTML = nameArray[0];
  let nameWidthMin = 480;
  let intervalMin = setInterval(() => {
    nameWidthMin = nameWidthMin - 2;
    name.style.width = nameWidthMin + "px";
    if (nameWidthMin === 0) {
      clearInterval(intervalMin);
      intervalToMax2();
    }
  }, 5);
}

function intervalToMax2() {    
  name.innerHTML = nameArray[1];                       // для написания 'Marcup Developer'
  let nameWidthMin = 0;
  let intervalMin = setInterval(() => {
    nameWidthMin = nameWidthMin + 2;
    name.style.width = nameWidthMin + "px";
    if (nameWidthMin === 480) {
      clearInterval(intervalMin);
      setTimeout(() => {
        intervalToMin3();
      }, 1500);
    }
  }, 5);
}

function intervalToMin3() {                           //для удаления 'Marcup Developer'
  name.innerHTML = nameArray[1];
  let nameWidthMin = 480;
  let intervalMin = setInterval(() => {
    nameWidthMin = nameWidthMin - 2;
    name.style.width = nameWidthMin + "px";
    if (nameWidthMin === 0) {
      clearInterval(intervalMin);
      intervalToMax4();
    }
  }, 5);
}

function intervalToMax4() {    
  name.innerHTML = nameArray[0];                       // для написания 'Volodymyr Sichinava'
  let nameWidthMin = 0;
  let intervalMin = setInterval(() => {
    nameWidthMin = nameWidthMin + 2;
    name.style.width = nameWidthMin + "px";
    if (nameWidthMin === 480) {
      clearInterval(intervalMin);
      setTimeout(() => {
        intervalToMin1();
      }, 1500);
    }
  }, 5);
}


//# sourceMappingURL=main.js.map
