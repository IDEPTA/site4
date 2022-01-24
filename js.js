new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
let navPanel,navLinks,burger,burgerLine,i;
burger = document.querySelector('.burger');
navPanel = document.querySelector('nav');
navLinks = document.querySelectorAll('nav a');
burgerLine = document.querySelectorAll('.burger_line');
navPanel.addEventListener('click',function(){
  for(i=0;i<4;i++){
    if ((i==0)||(i==3)) {
      burgerLine[i].classList.toggle('burger_line_hidden');
    }
    if (i==1) {
      burgerLine[i].classList.toggle('burger_line_active_one');
    }
    if (i==2) {
      burgerLine[i].classList.toggle('burger_line_active_two');
    }    
  }
  navPanel.classList.toggle('nav_active');
  for(i=0;i<6;i++){
    navLinks[i].classList.toggle('active_links');
  }
})