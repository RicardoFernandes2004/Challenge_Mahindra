document.getElementById('coins_drawer').addEventListener('pointerover', ()=>{
    document.getElementById('coins').style.display = 'flex'
})
document.getElementById('coins_drawer').addEventListener('pointerout', ()=>{
    document.getElementById('coins').style.display = 'none'
})
document.getElementById('my_profile_drawer').addEventListener('click',()=>{
    document.getElementById('profile').style.display = 'flex'
})
document.getElementById('quit_img').addEventListener('click',()=>{
    document.getElementById('profile').style.display = 'none'
})