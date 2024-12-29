const header = document.querySelector('header');
const filecv = document.querySelector('.cv-download');

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY > 120)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

filecv.addEventListener('click', function(e){
    e.preventDefault();
    // window.open('./asset/israelcv.pdf');
    console.log(filecv);
})

// // filecv.onclick = () =>{
// //     window.open('./asset/israelcv.pdf');
// // }