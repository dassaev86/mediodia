const controller = new ScrollMagic.Controller();

// ANIMACIONES DE STRATEGY EN MOBILE

const strategyText = new ScrollMagic.Scene({ triggerElement: ".strategy-mobile", duration: "200%", offset: -170, triggerHook: 0 })
.setTween("#strategy-text", 1, { className: "+=strategy-text-animation" })
// .addIndicators({ name: "marker_scene" })
.setPin('.strategy-mobile')
.addTo(controller);

const strategyImg1 = new ScrollMagic.Scene({ triggerElement: ".strategy-mobile", duration: "100%", offset: -170, triggerHook: 0 })
.setTween("#strategy-img1", 1, { className: "+=strategy-img1-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const strategyImg2 = new ScrollMagic.Scene({ triggerElement: ".strategy-mobile", duration: "100%", offset: 330, triggerHook: 0 })
.setTween("#strategy-img2", 1, { className: "+=strategy-img2-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const strategyImg3 = new ScrollMagic.Scene({ triggerElement: ".strategy-mobile", duration: "100%", offset: 830, triggerHook: 0 })
.setTween("#strategy-img3", 1, { className: "+=strategy-img3-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);


// ANIMACIONES DE BRAND EN MOBILE


const brandText = new ScrollMagic.Scene({ triggerElement: ".brand-mobile", duration: "200%", offset: -170, triggerHook: 0 })
.setTween("#brand-text", 1, { className: "+=strategy-text-animation" })
// .addIndicators({ name: "marker_scene" })
.setPin('.brand-mobile')
.addTo(controller);

const brandImg1 = new ScrollMagic.Scene({ triggerElement: ".brand-mobile", duration: "100%", offset: -170, triggerHook: 0 })
.setTween("#brand-img1", 1, { className: "+=strategy-img1-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const brandImg2 = new ScrollMagic.Scene({ triggerElement: ".brand-mobile", duration: "100%", offset: 330, triggerHook: 0 })
.setTween("#brand-img2", 1, { className: "+=strategy-img2-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const brandImg3 = new ScrollMagic.Scene({ triggerElement: ".brand-mobile", duration: "100%", offset: 830, triggerHook: 0 })
.setTween("#brand-img3", 1, { className: "+=strategy-img3-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);


// ANIMACIONES DE EXPRESSION


const expressionText = new ScrollMagic.Scene({ triggerElement: ".expression-mobile", duration: "200%", offset: -170, triggerHook: 0 })
.setTween("#expression-text", 1, { className: "+=strategy-text-animation" })
// .addIndicators({ name: "marker_scene" })
.setPin('.expression-mobile')
.addTo(controller);

const expressionImg1 = new ScrollMagic.Scene({ triggerElement: ".expression-mobile", duration: "100%", offset: -170, triggerHook: 0 })
.setTween("#expression-img1", 1, { className: "+=strategy-img1-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const expressionImg2 = new ScrollMagic.Scene({ triggerElement: ".expression-mobile", duration: "100%", offset: 330, triggerHook: 0 })
.setTween("#expression-img2", 1, { className: "+=strategy-img2-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const expressionImg3 = new ScrollMagic.Scene({ triggerElement: ".expression-mobile", duration: "100%", offset: 830, triggerHook: 0 })
.setTween("#expression-img3", 1, { className: "+=strategy-img3-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);



// ANIMACIONES DE DIALOGUE


const dialogueText = new ScrollMagic.Scene({ triggerElement: ".dialogue-mobile", duration: "200%", offset: -170, triggerHook: 0 })
.setTween("#dialogue-text", 1, { className: "+=strategy-text-animation" })
// .addIndicators({ name: "marker_scene" })
.setPin('.dialogue-mobile')
.addTo(controller);

const dialogueImg1 = new ScrollMagic.Scene({ triggerElement: ".dialogue-mobile", duration: "100%", offset: -170, triggerHook: 0 })
.setTween("#dialogue-img1", 1, { className: "+=strategy-img1-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const dialogueImg2 = new ScrollMagic.Scene({ triggerElement: ".dialogue-mobile", duration: "100%", offset: 330, triggerHook: 0 })
.setTween("#dialogue-img2", 1, { className: "+=strategy-img2-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);

const dialogueImg3 = new ScrollMagic.Scene({ triggerElement: ".dialogue-mobile", duration: "100%", offset: 830, triggerHook: 0 })
.setTween("#dialogue-img3", 1, { className: "+=strategy-img3-animation" })
// .addIndicators({ name: "marker_scene" })
// .setPin('.strategy-mobile')
.addTo(controller);


// CAMBIO DE COLOR DEL HEADER

window.addEventListener('scroll', function(e) {
    let scrollPos = window.scrollY;
    
    if (scrollPos > 0) {
        document.getElementById("header").classList.add("header-scroll");
    } else {
        document.getElementById("header").classList.remove("header-scroll");
    }
  });



  // ANIMACIÓN MENÚ MOBILE

  const arrowMenu = document.querySelector(".side-arrow-menu");
  const navLinks = document.querySelector(".nav-links-mobile");

  arrowMenu.addEventListener("click", () => {
      navLinks.classList.toggle("open");
  })




