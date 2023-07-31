/*==== Show Menu ====*/
const showMenu = (toggleId,navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
const scrollY = window.pageXOffset

sections.forEach(current =>{
  const sectionHeight = current.OffsetHeight
  const sectionTop = current.OffsetTop - 50
  sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.add('active-link')
  }else{
      document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.remove('active-link')

  }
})
}
window.addEventListener('scroll', scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
const header = document.getElementById('header')
if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/ 
function scrollTop(){
const scrollTop = document.getElementById('scroll-top')
if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollTop)

/*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer = mixitup('.resume_container', {
selectors: {
    target: '.resume_content'
},
animation: {
    duration: 400
}
});

/* Link active portfolio */ 
const linkResume = document.querySelectorAll('.resume_item')

function activeResume(){
if(linkResume){
  linkResume.forEach(l => l.classList.remove('active-resume'))
  this.classList.add('active-resume')
}
}
linkResume.forEach(l => l.addEventListener('click',activeResume))

/*===== GSAP ANIMATION =====*/ 
gsap.from('.home_img',{opacity: 0,duration : 2,delay: 0.5, x:60})
gsap.from('.home_data',{opacity: 0,duration : 2,delay: 0.8, y:25})
gsap.from('.home_greeting, .home_name, .home_profession, .home_button',{opacity: 0,duration : 2,delay: 1, y:25, ease: 'expo.out', stagger: 0.2})

gsap.from('.nav_logo, .nav_toggle',{opacity: 0,duration : 2,delay: 1.5, y:25, ease: 'expo.out', stagger: 0.2})
gsap.from('.nav_item',{opacity: 0,duration : 2,delay: 1.8, y:25, ease: 'expo.out', stagger: 0.2})
gsap.from('.home_social-icon',{opacity: 0,duration : 2,delay: 2, y:25, ease: 'expo.out', stagger: 0.2})