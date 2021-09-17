   let menu = document.querySelector('#menu-bars');
   let navbar = document.querySelector('.tabs');

   menu.onclick = () => {
       menu.classList.toggle('close-outline');
       navbar.classList.toggle('home-tabs');
   }

   let section = document.querySelectorAll('section');
   let navLinks = document.querySelectorAll('header .tabs a');

   window.onscroll = () => {

       menu.classList.remove('close-outline');
       navbar.classList.remove('home-tabs');

       section.forEach(sec => {

           let top = window.scrollY;
           let height = sec.offsetHeight;
           let offset = sec.offsetTop - 150;
           let id = sec.getAttribute('id');

           if (top >= offset && top < offset + height) {
               navLinks.forEach(links => {
                   links.classList.remove('home-tabs');
                   document.querySelector('header .tabs a[href*=' + id + ']').classList.add('home-tabs');
               });
           };

       });

   }
   let menu = document.querySelector('#setting');
   let navbar = document.querySelector('.tabs-setting');

   menu.onclick = () => {
       menu.classList.toggle('close-outline');
       navbar.classList.toggle('#setting');
   }

   var swiper = new Swiper(".homes", {
       spaceBetween: 30,
       centeredSlides: true,
       autoplay: {
           delay: 2000,
           disableOnInteraction: false,
       },
       pagination: {
           el: ".swiper-pagination",
           clickable: true,
       },
       loop: true,
   });
   var swiper = new Swiper(".review-swiper", {
       spaceBetween: 20,
       centeredSlides: true,
       autoplay: {
           delay: 2500,
           disableOnInteraction: false,
       },
       loop: true,
       breakpoints: {
           0: {
               slidesPerView: 1,
           },
           640: {
               slidesPerView: 2,
           },
           768: {
               slidesPerView: 2,
           },
           1024: {
               slidesPerView: 3,
           },
       },
   });

   function loader() {
       document.querySelector('.loader-container').classList.add('fade-out');
   }

   function fadeOut() {
       setInterval(loader, 1000);
   }

   window.onload = fadeOut;