const contato = document.querySelector('[data-js="contato"]')
const contatos = document.querySelector('#contato')
console.log(contato )
 contato.addEventListener('click', e => {
     e.preventDefault()
    const topo =  contatos.offsetTop
    console.log(topo)
    window.scrollTo({
        top:topo,
        behavior:'smooth',
    })
     
 })

 const menu = document.querySelector('.cabecalho')
const btnClose = document.querySelector('[data-js="closeMenu"]')
const menuMobile = document.querySelector('[data-js="menu"]')

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

menu.addEventListener('click',handleMenuClick)