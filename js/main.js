 let btnHome=document.querySelector('#homeBTN');

window.addEventListener('scroll', ()=>{
    document.getElementById('homeBTN').style.visibility="visible";
});

btnHome.addEventListener('click', ()=>{
    window.scroll(0, 0);
});

