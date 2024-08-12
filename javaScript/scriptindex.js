let imgmenu=document.querySelector('.imgmenu')
let imgmenuVertical=document.querySelector('.imgmenuVertical')
let divAvantnav=document.querySelector('span')
let nav =document.querySelector('nav')
let header=document.querySelector('.entete')
let main=document.querySelector('main')
let footer=document.querySelector('footer')

imgmenu.addEventListener('click',()=>{
    nav.classList.add('block')
    document.querySelector('body').style.backgroundColor='#1f293057'
    
})
header.addEventListener('click',()=>{
    nav.classList.remove('block')
    divAvantnav.classList.remove('inherit')
    document.querySelector('body').style.backgroundColor='#1f293000'
    
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
    // if (document.documentElement.scrollTop>86 && window.innerWidth>800) {
    //     nav.style.position='sticky'
    //     nav.style.top=0
    // }
    // else{
    //     nav.style.position='relative'
    // }
    let anim1messagesevice=document.querySelectorAll("main .service .divService .differentService img")
    // let anim1messageargence=document.querySelectorAll('main .agence .divAgence div img')
   
    if (document.documentElement.scrollTop>1000) {
        
        for (let i = 0; i < anim1messagesevice.length; i++) {
            anim=anim1messagesevice[i]
            anim.classList.add('animation')
            
        }   
        // for (let i = 0; i < anim1messageargence.length; i++) {
        //     anim=anim1messageargence[i]
        //     anim.classList.add('animation')
            
        // }   
    }
    else{
        for (let i = 0; i < anim1messageheader.length; i++) {
            anim=anim1messageheader[i]
            anim.classList.remove('animation')
          
        }
        
    }
})

