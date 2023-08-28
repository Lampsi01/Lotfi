  

 const swiper = new Swiper('.swiper', {
  // Optional parameters
   slidesPerView : 3 , 
   spaceBetween : 0 , 
   slidesPerGroup : 3 , 
   

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
     
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // When window width is >= 768px

    1110: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    720: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    

    // When window width is >= 992px
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },

  
 
});

  

let menuBtn = document.querySelector(".icon") ;  
let dropLinks = document.querySelector(".Droplinks")

menuBtn.addEventListener("click" , function(){ 
  dropLinks.classList.toggle("apear") ;
  if(menuBtn.getAttribute("class") === "fa-solid fa-bars icon" ) {
    menuBtn.setAttribute("class" , "fa-solid fa-x icon")
  }else {
    menuBtn.setAttribute("class" , "fa-solid fa-bars icon")
  }
  
  
   
})

let AtagsOfDropLinks = document.querySelectorAll(".Droplinks li a ")

for(let i=0; i< AtagsOfDropLinks.length ; i++) {
  AtagsOfDropLinks[i].addEventListener("click" , function(){ 
    dropLinks.classList.remove("apear");
    menuBtn.setAttribute("class" , "fa-solid fa-bars icon")

  })
}

