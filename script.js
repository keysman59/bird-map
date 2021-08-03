const logoSenim = document.querySelector('.map-logo-kvartal--senim'),
      kvHoverSenim = document.querySelector('.map-hover-kvartal--senim'),
      logoBaqyt = document.querySelector('.map-logo-kvartal--baqyt'),
      kvHoverBaqyt = document.querySelector('.map-hover-kvartal--baqyt'),

      streetTuran = document.querySelector('.map-street--turan'),
      streetE22 = document.querySelector('.map-street--e22'),
      streetT4 = document.querySelector('.map-street--t4'),
      streetTolebi = document.querySelector('.map-street--tolebi'),

      iconMagnum = document.querySelector('.map-icon-wrp--magnum'),
      iconSchool = document.querySelector('.map-icon-wrp--school'),
      iconRun = document.querySelector('.map-icon-wrp--run'),
      iconDetsad = document.querySelector('.map-icon-wrp--detsad');

logoSenim.addEventListener('mouseout', () => {
  kvHoverSenim.style.opacity = "0%";
  logoSenim.style.transform = "translate(0px, 0px)";
});

logoSenim.addEventListener('mouseover', () => {
  kvHoverSenim.style.opacity = "100%";
  logoSenim.style.transform = "translate(0px, -10px)";
});

logoBaqyt.addEventListener('mouseout', () => {
  kvHoverBaqyt.style.opacity = "0%";
  logoBaqyt.style.transform = "translate(0px, 0px)";
});

logoBaqyt.addEventListener('mouseover', () => {
  kvHoverBaqyt.style.opacity = "100%";
  logoBaqyt.style.transform = "translate(0px, -10px)";
});

function bindStreet(triggerSelection) {

  const trigger = document.querySelectorAll(triggerSelection);

  trigger.forEach(item => {
    item.addEventListener('mouseout', () => {
      item.style.transform = "translate(0px, -25px)";
    });
    item.addEventListener('mouseover', () => {
      item.style.transform = "translate(0px, -35px)";
    });
  })
}

bindStreet('.map-street');


window.onload = function() {
  setTimeout(() => {
    streetTuran.style.transform = "translate(0px, -25px)";
    streetTuran.style.opacity = "100%";
    iconMagnum.style.opacity = "100%";
    iconMagnum.style.transform = "rotate(0deg)";
    iconSchool.style.opacity = "100%";
    iconSchool.style.transform = "rotate(0deg)";
    iconRun.style.opacity = "100%";
    iconRun.style.transform = "rotate(0deg)";
    iconDetsad.style.opacity = "100%";
    iconDetsad.style.transform = "rotate(0deg)";
  }, 1000);
  setTimeout(() => {
    streetE22.style.transform = "translate(0px, -25px)";
    streetE22.style.opacity = "100%";
  }, 1400);
  setTimeout(() => {
    streetT4.style.transform = "translate(0px, -25px)";
    streetT4.style.opacity = "100%";
  }, 1800);
  setTimeout(() => {
    streetTolebi.style.transform = "translate(0px, -25px)";
    streetTolebi.style.opacity = "100%";
  }, 2200);
  setTimeout(() => {
    logoBaqyt.style.transform = "translate(0px, -25px)";
    logoBaqyt.style.opacity = "100%";
    logoSenim.style.transform = "translate(0px, -25px)";
    logoSenim.style.opacity = "100%";
  }, 2500);
  setTimeout(() => {
    logoBaqyt.style.transform = "translate(0px, 0px)";
    logoSenim.style.transform = "translate(0px, 0px)";
  }, 3000);

};