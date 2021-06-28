'use strict';
    
// 기본 세팅 2
$(document).ready(function(){

    // ======================= arrowup =====================
    // header scroll event
    var $header = $('#header');
    var $arrowUp = $('.uil-arrow-up');

    $(window).scroll(function(){
        // number가 반환된다 = $를 붙이지 않는다 ( 개인 스타일 )
        var scrollTop = $(window).scrollTop();
        /* outerHeight는 border까지의 높이 포함 */
        var headerHeight = $('#header').outerHeight();
        var aboutHeight = $('#about').outerHeight();
        // header가 감춰졌을때 fixed를 해서 따라오게 한다
        // 스크롤된 값이 헤더의 높이보다 커지면

        if( scrollTop >= headerHeight ){
            $header.addClass('fixed');
        }else{
            $header.removeClass('fixed');
        }

        // aboutSection을 지나치면 보여라
        // scrollTop 값이 about section 높이보다 커지면
        if( scrollTop > aboutHeight ){
            $arrowUp.addClass('visible');
        }else{
            $arrowUp.removeClass('visible');
        }        
    })

    // ======================= arrowup end =====================


    // ================== responsive nav toggle ===================
    // toggle ele
    // gnb ele
    var $toggle = $('.toggle'),
        $gnb = $('.gnb'),
        $dimmed = $('#dimmed');

    $($toggle).click(function(){
        $dimmed.toggleClass('visible');
        $gnb.toggleClass('visible');
    })
    // ================== responsive nav toggle end ===================

    // ================= dim =======================
    // dimmed effect
    $dimmed.click(function(){
        $(this).removeClass('visible');
        $gnb.removeClass('visible');
        $toggle.removeClass('active');
    })

    // gnb__item window scroll 
    var $gnbMenu = $('.gnb__menu');
    $gnbMenu.click(function(event){
        var dataTarget = $(this).attr('data-target');
        if(dataTarget !== ""){
            event.preventDefault();
            // dataTarget #about, #skills, #contact
            // target은 클릭한 메뉴의 엘리먼트다
            var $target = $(dataTarget);
            var distance = $target.offset().top;
            $('html, body').animate({scrollTop: distance});
        }
    })
    // ================= dim end =======================

    // ===================== skills slider =================
    $('.skills__header').click(function(){
        $(this).children('.skill__icon--arrow').toggleClass('active');
        $(this).siblings('.skill__data').stop().slideToggle();
    })
    // ===================== skills slider end =================


    // ===================== portfolio slider ================ 
    $('.portfolio__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: true,
        arrows: true,
        dots: false,
        centerMode: true,
        responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        });
      // ===================== portfolio slider end ================ 

    // skills
        $('.skills-header').click(function(){
        $(this).children('.skill-icon--arrow').toggleClass('active');
        $(this).siblings('.skill-data').stop().slideToggle();
    })

    // arrow up window scroll
    $arrowUp.click(function(){
        $('html, body').animate({scrollTop: 0})
    })

    $('.works__banner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });


    
})
