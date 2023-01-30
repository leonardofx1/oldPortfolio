const contato = document.querySelector('[data-js="contato"]')
const contatos = document.querySelector('#contato')
const h1 = document.querySelector('[data-js="digitacao"]')
const menu = document.querySelector('.cabecalho')
const btnClose = document.querySelector('[data-js="closeMenu"]')
const menuMobile = document.querySelector('[data-js="menu"]')

 contato.addEventListener('click', e => {
     e.preventDefault()
    const topo =  contatos.offsetTop
    console.log(topo)
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
let i = 0;
const text = "ola, eu sou o Leonardo Desenvolvedor Front-End";
const speed = 100;

const writer = () =>  {
  if (i < text.length) {
    h1.textContent += text[i];
    i++;
    setTimeout(writer, speed);
  }
  else {
   h1.textContent =''
   i = 0
   writer()
  }
}
writer()

menu.addEventListener('click',handleMenuClick)