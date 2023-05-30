let body = document.body;
let header = document.querySelector("header");
let menu = document.querySelector('.menu');
let displayer = document.querySelector('.displayer');
let btnMenu = document.querySelector('.bx-menu');
let btnClose = document.querySelector('.bx-x');
let btnPlus = document.querySelectorAll('.bx-plus');
let colorBtn = document.querySelectorAll('.colorBtn');
let newImg = document.createElement("img");
let faqArray = document.querySelectorAll('.question');
let imgArray = ["./libs/img/gray.png","./libs/img/green.png","./libs/img/black.png"]

btnMenu.addEventListener("click",() =>{
  menu.classList.toggle("menuActive");
  menu.style.position = "fixed"
})
btnClose.addEventListener("click",() =>{
  menu.classList.toggle("menuActive");
})
// gsap script 
newImg.setAttribute("src",`${imgArray[0]}`)
newImg.setAttribute("width",`90%`)
newImg.classList.add("image")
displayer.append(newImg)

colorBtn[0].addEventListener("click",()=>{
  newImg.setAttribute("src",`${imgArray[0]}`)
newImg.setAttribute("width",`85%`)
displayer.append(newImg)
newImg.classList.add("move1")
gsap.from(".image",{
  scale:2,
  yoyo:true,
  ease:"elastic",
  duration:2,
  x:-window.innerWidth *2
})
})

colorBtn[1].addEventListener("click",()=>{
  newImg.setAttribute("src",`${imgArray[1]}`)
newImg.setAttribute("width",`85%`)
displayer.append(newImg)
newImg.classList.add("move2")

gsap.from(".image",{
  scale:2,
  yoyo:true,
  ease:"elastic",
  duration:2,
  x:-window.innerWidth *2
})
})

colorBtn[2].addEventListener("click",()=>{
  newImg.setAttribute("src",`${imgArray[2]}`)
newImg.setAttribute("width",`85%`)
displayer.append(newImg)
newImg.classList.add("move3")
gsap.from(".image",{
  scale:2,
  yoyo:true,
  ease:"bounce.out",
  duration:2,
  x:-window.innerWidth *2
})
})
// faq show & hide script 
btnPlus[0].addEventListener("click",()=>{
  faqArray[0].classList.toggle("faqActive");
})
btnPlus[1].addEventListener("click",()=>{
  faqArray[1].classList.toggle("faqActive");
})
btnPlus[2].addEventListener("click",()=>{
  faqArray[2].classList.toggle("faqActive");
})
      // faq show & hide script 
// gsap script 