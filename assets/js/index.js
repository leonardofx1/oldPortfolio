const contato = document.querySelector('[data-js="contato"]')
const contatos = document.querySelector('#contato')
const h1 = document.querySelector('[data-js="nome"]')
const h2 = document.querySelector('[data-js="profissao"]')
const menu = document.querySelector('.cabecalho')
const btnClose = document.querySelector('[data-js="closeMenu"]')
const menuMobile = document.querySelector('[data-js="menu"]')

 contato.addEventListener('click', e => {
     e.preventDefault()
    const topo =  contatos.offsetTop
    window.scrollTo({
        top:topo,
        behavior:'smooth',
    })
     
 })

const removeAddClass = (el, del, ad) => {
   el.classList.remove(del)
   el.classList.add(ad)
}

const showMenuMobile = () =>{
   removeAddClass(menuMobile,'cabecalho__nav', 'active')
   removeAddClass(btnClose, 'd-none', 'close__menu')
}

const closeMenu = () => {
    removeAddClass(menuMobile,'active', 'cabecalho__nav')
    removeAddClass(btnClose, 'close__menu', 'd-none')
}
const handleMenuClick = (e) => {
   const classElement =  e.target.classList[0]
   const classClose = ['close__menu'].includes(classElement)
   classClose && closeMenu()
   classElement == 'menu__ativo' && showMenuMobile()
   console.log(classElement) 
}
const  typeWriter = (text, elem, callback) => {
   let i = 0;
   const speed = 50;
   const type = () => {
     if (i < text.length) {
       elem.innerHTML += text.charAt(i);
       i++;
       setTimeout(type, speed);
     } else {
       if (callback) {
         callback();
       }
     }
   };
   type();
 }
 
 const firstElem = document.getElementById("first-element");
 const secondElem = document.getElementById("second-element");
 
 typeWriter("Ola, eu sou o Leonardo.", h1, () => {
   typeWriter("Desenvolvedor Front End.", h2);
 });
 
const showAnimation = section =>{
   const arr = Array.from(section)
   arr.forEach(el =>  el.intersectionRatio >= 0.6 && el.target.classList.add('init__hidden___off'))}

menu.addEventListener('click',handleMenuClick)



const obs = new IntersectionObserver(showAnimation
,{
   threshold:[0,0.5,1]
})

 Array.from(document.querySelectorAll('.init__hidden'))
 .forEach(el =>  obs.observe(el))

