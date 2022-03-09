const controller = new ScrollMagic.Controller();

// ANIMACIONES DE STRATEGY EN MOBILE

const strategyClockMob = new ScrollMagic.Scene({ triggerElement: ".strategy-mobile", duration: "100%", offset: 0, triggerHook: 0 })
.setTween("#strategy-clock-mob", 1, { className: "+=strategy-clock-desk-animation" })
.addTo(controller);

const strategyText = new ScrollMagic.Scene({ triggerElement: ".strategy-mobile", duration: "450%", offset: 0, triggerHook: 0 })
.setTween("#strategy-text", 1, { className: "+=strategy-text-animation" })
// .addIndicators({ name: "marker_scene" })
.setPin('.strategy-mobile')
.addTo(controller);

const strategyImg1 = new ScrollMagic.Scene({ triggerElement: ".strategy-mobile", duration: "100%", offset: 800, triggerHook: 0 })
.setTween("#strategy-img1", 1, { className: "+=strategy-img1-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const strategyImg2 = new ScrollMagic.Scene({ triggerElement: ".strategy-mobile", duration: "100%", offset: 1600, triggerHook: 0 })
.setTween("#strategy-img2", 1, { className: "+=strategy-img2-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const strategyImg3 = new ScrollMagic.Scene({ triggerElement: ".strategy-mobile", duration: "100%", offset: 2400, triggerHook: 0 })
.setTween("#strategy-img3", 1, { className: "+=strategy-img3-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);


// ANIMACIONES DE BRAND EN MOBILE

const brandClockMob = new ScrollMagic.Scene({ triggerElement: ".brand-mobile", duration: "100%", offset: 0, triggerHook: 0 })
.setTween("#brand-clock-mob", 1, { className: "+=strategy-clock-desk-animation" })
.addTo(controller);

const brandText = new ScrollMagic.Scene({ triggerElement: ".brand-mobile", duration: "450%", offset: 0, triggerHook: 0 })
.setTween("#brand-text", 1, { className: "+=strategy-text-animation" })
// .addIndicators({ name: "marker_scene" })
.setPin('.brand-mobile')
.addTo(controller);

const brandImg1 = new ScrollMagic.Scene({ triggerElement: ".brand-mobile", duration: "100%", offset: 800, triggerHook: 0 })
.setTween("#brand-img1", 1, { className: "+=strategy-img1-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const brandImg2 = new ScrollMagic.Scene({ triggerElement: ".brand-mobile", duration: "100%", offset: 1600, triggerHook: 0 })
.setTween("#brand-img2", 1, { className: "+=strategy-img2-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const brandImg3 = new ScrollMagic.Scene({ triggerElement: ".brand-mobile", duration: "100%", offset: 2400, triggerHook: 0 })
.setTween("#brand-img3", 1, { className: "+=strategy-img3-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);


// ANIMACIONES DE EXPRESSION

const expressionClockMob = new ScrollMagic.Scene({ triggerElement: ".expression-mobile", duration: "100%", offset: 0, triggerHook: 0 })
.setTween("#expression-clock-mob", 1, { className: "+=strategy-clock-desk-animation" })
.addTo(controller);

const expressionText = new ScrollMagic.Scene({ triggerElement: ".expression-mobile", duration: "450%", offset: 0, triggerHook: 0 })
.setTween("#expression-text", 1, { className: "+=strategy-text-animation" })
// .addIndicators({ name: "marker_scene" })
.setPin('.expression-mobile')
.addTo(controller);

const expressionImg1 = new ScrollMagic.Scene({ triggerElement: ".expression-mobile", duration: "100%", offset: 800, triggerHook: 0 })
.setTween("#expression-img1", 1, { className: "+=strategy-img1-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const expressionImg2 = new ScrollMagic.Scene({ triggerElement: ".expression-mobile", duration: "100%", offset: 1600, triggerHook: 0 })
.setTween("#expression-img2", 1, { className: "+=strategy-img2-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const expressionImg3 = new ScrollMagic.Scene({ triggerElement: ".expression-mobile", duration: "100%", offset: 2400, triggerHook: 0 })
.setTween("#expression-img3", 1, { className: "+=strategy-img3-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);



// ANIMACIONES DE DIALOGUE


const dialogueText = new ScrollMagic.Scene({ triggerElement: ".dialogue-mobile", duration: "450%", offset: 0, triggerHook: 0 })
.setTween("#dialogue-text", 1, { className: "+=strategy-text-animation" })
// .addIndicators({ name: "marker_scene" })
.setPin('.dialogue-mobile')
.addTo(controller);

const dialogueImg1 = new ScrollMagic.Scene({ triggerElement: ".dialogue-mobile", duration: "100%", offset: 800, triggerHook: 0 })
.setTween("#dialogue-img1", 1, { className: "+=strategy-img1-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const dialogueImg2 = new ScrollMagic.Scene({ triggerElement: ".dialogue-mobile", duration: "100%", offset: 1600, triggerHook: 0 })
.setTween("#dialogue-img2", 1, { className: "+=strategy-img2-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const dialogueImg3 = new ScrollMagic.Scene({ triggerElement: ".dialogue-mobile", duration: "100%", offset: 2400, triggerHook: 0 })
.setTween("#dialogue-img3", 1, { className: "+=strategy-img3-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);


// CAMBIO DE COLOR DEL HEADER

window.addEventListener('scroll', function(e) {
    let scrollPos = window.scrollY;
    console.log(scrollPos);
    
    if (scrollPos > 0) {
        document.getElementById("header").classList.add("header-scroll");
        document.querySelector("body").classList.add("header-scroll");
        document.querySelector(".logo-negro").style.opacity = "0";
        document.querySelector(".logo-blanco").style.opacity = "1";
        document.querySelector("#sun-white").style.display = "none";
        document.querySelector("#sun-black").style.display = "block";
        document.querySelectorAll(".nav-link")[0].style.color = "#000000";
        document.querySelectorAll(".nav-link")[1].style.color = "#000000";
        document.querySelectorAll(".nav-link")[2].style.color = "#000000";
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".header__title").style.display = "block";
        
    } else {
        document.getElementById("header").classList.remove("header-scroll");
        document.querySelector("body").classList.remove("header-scroll");
        document.querySelector(".logo-negro").style.opacity = "1";
        document.querySelector(".logo-blanco").style.opacity = "0";
        document.querySelector("#sun-white").style.display = "block"
        document.querySelector("#sun-black").style.display = "none"
        document.querySelectorAll(".nav-link")[0].style.color = "#FFFFFF"
        document.querySelectorAll(".nav-link")[1].style.color = "#FFFFFF"
        document.querySelectorAll(".nav-link")[2].style.color = "#FFFFFF"
    }
  });



  // ANIMACIÓN MENÚ MOBILE

  const arrowMenu = document.querySelector(".side-arrow-menu");
  const navLinks = document.querySelector(".nav-links-mobile");

  arrowMenu.addEventListener("click", () => {
      navLinks.classList.toggle("open");
  })


  // ANIMACIONES DE STRATEGY EN DESKTOP

  const estira = new ScrollMagic.Scene({ triggerElement: ".section2", duration: "100%", offset: 0, triggerHook: 0 })
.setTween("#estira", 1, { className: "+=estirado" })
// .addIndicators({ name: "marker_scene" })
.setPin('.section2')
.addTo(controller);

  const imagen = new ScrollMagic.Scene({ triggerElement: ".section2", duration: "100%", offset: 0, triggerHook: 0 })
.setTween("#imagen", 1, { className: "+=move" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.section2')
.addTo(controller);

 
  const strategyClock = new ScrollMagic.Scene({ triggerElement: ".strategy", duration: "200%", offset: 0,  triggerHook: "onLeave" })
  .setTween("#strategy-clock", 1, { className: "+=strategy-clock-desk-animation" })
  .setPin('.strategy')
  // .addIndicators({ name: "reloj" })
  .addTo(controller);

  const strategyImgDesk1 = new ScrollMagic.Scene({ triggerElement: ".strategy", duration: '200%', offset: 300, triggerHook: 0 })
  .setTween("#strategy-desk-img1", 1, { className: "+=strategy-img1-desk-animation" })
  // .addIndicators({ name: "imagen" })
  // .setPin('.strategy')
  .addTo(controller);


  // const strategyImgDesk1 = new ScrollMagic.Scene({ triggerElement: ".strategy", duration: 1000, offset: 500 })
  // .setTween("#strategy-desk-img1", 1, { className: "+=strategy-img1-desk-animation" })
  // .addIndicators({ name: "imagen" })
  // .setPin('.strategy')
  // .addTo(controller);




  // ANIMACIONES DE BRAND EN DESKTOP

  const brandClock = new ScrollMagic.Scene({ triggerElement: ".brand", duration: "400%", offset: 0, triggerHook: 0 })
  .setTween("#brand-clock", 1, { className: "+=strategy-clock-desk-animation" })
  .setPin('.brand')
  .addTo(controller);

  const brandImgDesk1 = new ScrollMagic.Scene({ triggerElement: ".brand", duration: "250%", offset: 300, triggerHook: 0 })
  .setTween("#brand-desk-img1", 1, { className: "+=brand-img1-desk-animation" })
  // .addIndicators({ name: "reloj" })
//   .setPin('.strategy')
  .addTo(controller);

  const brandImgDesk2 = new ScrollMagic.Scene({ triggerElement: ".brand", duration: "250%", offset: 1000, triggerHook: 0 })
  .setTween("#brand-desk-img2", 1, { className: "+=brand-img2-desk-animation" })
  // .addIndicators({ name: "marker_scene" })
//   .setPin('.strategy')
  .addTo(controller);

  const brandImgDesk3 = new ScrollMagic.Scene({ triggerElement: ".brand", duration: "250%", offset: 1700, triggerHook: 0 })
  .setTween("#brand-desk-img3", 1, { className: "+=brand-img3-desk-animation" })
  // .addIndicators({ name: "marker_scene" })
//   .setPin('.strategy')
  .addTo(controller);


  // ANIMACIONES DE EXPRESSION EN DESKTOP

  const expressionClock = new ScrollMagic.Scene({ triggerElement: ".expression", duration: "450%", offset: 0, triggerHook: 0 })
  .setTween("#expression-clock", 1, { className: "+=strategy-clock-desk-animation" })
  .setPin('.expression')
  .addTo(controller);

  const expressionImgDesk1 = new ScrollMagic.Scene({ triggerElement: ".expression", duration: "250%", offset: 300, triggerHook: 0 })
  .setTween("#expression-desk-img1", 1, { className: "+=expression-img1-desk-animation" })
  // .addIndicators({ name: "marker_scene" })
//   .setPin('.strategy')
  .addTo(controller);

  const expressionImgDesk2 = new ScrollMagic.Scene({ triggerElement: ".expression", duration: "250%", offset: 1000, triggerHook: 0 })
  .setTween("#expression-desk-img2", 1, { className: "+=expression-img2-desk-animation" })
  // .addIndicators({ name: "marker_scene" })
//   .setPin('.strategy')
  .addTo(controller);

  const expressionImgDesk3 = new ScrollMagic.Scene({ triggerElement: ".expression", duration: "250%", offset: 1700, triggerHook: 0 })
  .setTween("#expression-desk-img3", 1, { className: "+=expression-img3-desk-animation" })
  // .addIndicators({ name: "marker_scene" })
//   .setPin('.strategy')
  .addTo(controller);


  // ANIMACIONES DE DIALOGUE DESKTOP

  const dialogueClock = new ScrollMagic.Scene({ triggerElement: ".dialogue", duration: "350%", offset: 0, triggerHook: 0 })
  .setTween("#dialogue-clock", 1, { className: "+=strategy-clock-desk-animation" })
  .setPin('.dialogue')
  .addTo(controller);

  const dialogueImgDesk1 = new ScrollMagic.Scene({ triggerElement: ".dialogue", duration: "250%", offset: 300, triggerHook: 0 })
  .setTween("#dialogue-desk-img1", 1, { className: "+=dialogue-img1-desk-animation" })
  // .addIndicators({ name: "marker_scene" })
//   .setPin('.strategy')
  .addTo(controller);

  const logosContainer = new ScrollMagic.Scene({ triggerElement: ".dialogue", duration: "250%", offset: 300, triggerHook: 0 })
  .setTween("#logos-container", 1, { className: "+=dialogue-logos-animation" })
  // .addIndicators({ name: "marker_scene" })
//   .setPin('.strategy')
  .addTo(controller);

  const dialogueImgDesk2 = new ScrollMagic.Scene({ triggerElement: ".dialogue", duration: "250%", offset: 950, triggerHook: 0 })
  .setTween("#dialogue-desk-img2", 1, { className: "+=dialogue-img2-desk-animation" })
  // .addIndicators({ name: "marker_scene" })
//   .setPin('.strategy')
  .addTo(controller);


        



