$(function(){
    var header = $("#header"),
        introH =  $(".deve").innerHeight();
        simvol = $(".simvol"),
        scrollOffset = $(window).scrollTop(50);
       
 
    $(window).on("scroll",function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
        checkSlide(scrollOffset);
      
    });
    console.log(scrollOffset);
    console.log(introH);
    function checkScroll(scrollOffset){ 
        console.log(scrollOffset);
        if(scrollOffset>= introH){
            header.addClass("active")
        }else{
            header.removeClass("active")
        }
    }
    function checkSlide (scrollOffset){ 
        if(scrollOffset>= 100){
            simvol.addClass("crash")
        }else{
            simvol.removeClass("crash")
        }
    }
    
});

// const header = document.querySelector('#header');
// const first = document.querySelector('.deve');
// const headerHeight = header.offsetHeight;
// const firstHeight = first.offsetHeight;
// let lastScrollTop = 0;

// window.addEventListener('scroll', () => {
// 	let scrollDistance = window.scrollY;

// 	// if (scrollDistance >= firstHeight + headerHeight) {
// 	// 	header.classList.add('header--fixed');
// 	// 	first.style.marginTop = `${headerHeight}px`;
// 	// } else {
// 	// 	header.classList.remove('header--fixed');
// 	// 	first.style.marginTop = null;
// 	// }

// 	if (scrollDistance > lastScrollTop) {
// 		header.classList.remove('active');
// 		// first.style.marginTop = null;
// 	} else {
// 		header.classList.add('active');
// 		// first.style.marginTop = `${headerHeight}px`;
// 	}
// 	if (scrollDistance === 0) {
// 		header.classList.remove('active');
// 		// first.style.marginTop = null;
// 	}

// 	lastScrollTop = scrollDistance;
// });

$(function(){
    $("[data-scroll]").on("click",function(event){
        event.preventDefault(); 

        var $this =  $(this),
            blockid = $this.data('scroll'); 
            console.log(blockid);
            // -75 это чтоб был отступ и шапка не наезжала на текст 
            blockoffset =$(blockid).offset().top; 
        // добавление класса актив для ссылок
        $(".header_links").removeClass("crucial");
        // $("grid_text").removeClass("active");
        $this.addClass("crucial");
        // плавная анимация 
        $("html, body").animate({
            scrollTop:blockoffset
        },1000)
    });

    $("#nav_burger").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $("header").toggleClass("table");
    });

    // свое
    $("#nav").on("click", function(event){
        event.preventDefault();
        $("#nav_burger").removeClass("active");
        $("header").removeClass("table");
    });
});