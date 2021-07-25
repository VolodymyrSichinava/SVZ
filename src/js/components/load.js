function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
      setTimeout(() => {
          done();
      }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
      duration: 1,
      width: "100%",
      left: "100%",
      ease: "Expo.easeInOut",
      delay: 0.3,
  });
  tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(document).ready(function () {
  barba.init({
      sync: true,
      transitions: [
          {
            async leave(data) {
                const done = this.async();

                pageTransition();
                await delay(1000);
                done();
            },

            async enter(data) {
                contentAnimation();
                let name = document.getElementById('name');
                let nameArray = ['Volodymyr Sichinava', 'Markup Developer'];
                intervalToMin1();

                function intervalToMin1() {                        //для удаления 'Volodymyr Sichinava'
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
            },

            async once(data) {
                contentAnimation();
            },
          },
      ],
  });
});
