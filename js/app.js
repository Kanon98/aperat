//Scroll Header

window.addEventListener('scroll',()=>{
  const scroll = document.documentElement.scrollTop;
  const header = document.getElementById('header');
  const headerContainer = document.getElementById('header-container');
  const logo = document.getElementById('logo');
  const headerPrincipal = document.getElementById('header-principal');
  if(scroll > 150){
    headerPrincipal.classList.add('scroll-header-principal')
    header.classList.add('scroll-header');
    headerContainer.classList.add('header-container-scroll')
    logo.classList.add('img-scroll');
  }else{
    headerPrincipal.classList.remove('scroll-header-principal')
    header.classList.remove('scroll-header')
    headerContainer.classList.remove('header-container-scroll')
    logo.classList.remove('img-scroll');
  }
})

// Scroll Up

const buttonUp = document.getElementById('button-up')
let scrollUp = ()=>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
buttonUp.addEventListener('click', scrollUp)

window.addEventListener('scroll',()=>{
  const currentScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight;
  console.log(currentScroll);
  console.log(height);
  if(currentScroll > height/6){
    buttonUp.style.transform = "scale(1)"
  }else{
        buttonUp.style.transform = "scale(0)"
  }
})



//Menu proyectos Header

const proyects = document.getElementById('proyects')
const proyectsMenu = document.querySelector('.proyects__menu')

proyects.addEventListener('click',()=>{
  proyectsMenu.classList.toggle('visible')
})

//Menú

const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
const close = document.querySelector('.fa-times')

burger.addEventListener('click',()=>{
  menu.classList.add('slide')
  burger.classList.add('opacity')
})
close.addEventListener('click',()=>{
  menu.classList.remove('slide')
  burger.classList.remove('opacity')
  proyectsMenu.classList.remove('visible')
})




//Galería

const gallery = document.getElementById('gallery__container')
const imageContainer = document.querySelectorAll('.img__container')
const modalImage = document.getElementById('modal-image')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')

console.log(imageContainer)

gallery.addEventListener('click',(e)=>{
  console.log(e.target.src)
  modal.classList.add('modal-visible')
  modalImage.setAttribute('src', e.target.src)
})
closeModal.addEventListener('click',()=>{
  modal.classList.remove('modal-visible')
  modalImage.setAttribute('src',"")
})

//Efecto Fade

const left = document.querySelectorAll('.left')
const right = document.querySelectorAll('.right')
const imgGallery = document.querySelectorAll('.img__container')

const callback = (entries, observer)=>{
  entries.forEach((entrie) => {
    if(entrie.isIntersecting){
      entrie.target.classList.add('visible')
    }
  });

}

const options = {
  root: null,
  rootMargin: '-100px 0px',
  threshold: 0
}

const observer = new IntersectionObserver(callback, options)
left.forEach(element => observer.observe(element))
right.forEach(element => observer.observe(element))
imgGallery.forEach(element => observer.observe(element))

// Menú Proyectos Footer

const proyectos = document.getElementById('proyectos')
const proyectosContainer = document.getElementById('proyectos-container')
const icon = document.getElementById('icon')

proyectos.addEventListener('click',()=>{
  proyectosContainer.classList.toggle('visible')
  icon.classList.toggle('visible')
})
