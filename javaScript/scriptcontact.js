let imgmenu=document.querySelector('.imgmenu')
let imgmenuVertical=document.querySelector('.imgmenuVertical')
let divAvantnav=document.querySelector('span')
let nav =document.querySelector('nav')
let main=document.querySelector('main')

let footer=document.querySelector('footer')


imgmenu.addEventListener('click',()=>{
    nav.classList.add('block')
    document.querySelector('body').style.backgroundColor='#1f293057'
    
})

main.addEventListener('click',()=>{
    nav.classList.remove('block')
    divAvantnav.classList.remove('inherit')
    document.querySelector('body').style.backgroundColor='#1f293000'
    
    
})
footer.addEventListener('click',()=>{
    nav.classList.remove('block')
    divAvantnav.classList.remove('inherit')
    document.querySelector('body').style.backgroundColor='#1f293000'
    
})

imgmenuVertical.addEventListener('click',()=>{
    divAvantnav.classList.toggle('inherit')
    // document.querySelector('body').style.backgroundColor='black'
    
})
window.addEventListener('scroll',()=>{
    divAvantnav.classList.remove('inherit')
    // if (document.documentElement.scrollTop>86) {
    //     nav.style.position='fixed'
        
    // }
    // else{
    //     nav.style.position='relative'
    // }
})
