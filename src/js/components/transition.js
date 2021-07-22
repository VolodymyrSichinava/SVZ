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
