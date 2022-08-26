document.addEventListener('DOMContentLoaded', function(e) {
    yall();
    AOS.init({ duration: 1000 });
})

jQuery(document).ready(function($) {
    const onImg = "<img src="+'images/sound-wave.svg'+"> Sound Off",
        offImg = "<img src="+'images/soundoff.svg'+"> Sound On";

    // let bgaudio = $("#bgaudio");
    const bgaudio = new Audio("sb_adriftamonginfinitestars.mp3");

    const bgaudioTrigger = $("#bgaudioTrigger");
    // let bgtriggerImg = bgaudioTrigger.html("<img src="+'img'+">" );

    bgaudioTrigger.on('click', function(e) {
        // console.info(bgaudio.readyState)
        if (bgaudio.paused) {
            bgaudio.play()
            $(this).html(onImg)
            // bgtriggerImg.attr('src', offImg);
        } else {
            bgaudio.pause()
            $(this).html(offImg)
            // bgtriggerImg.attr('src', onImg);
        }
    })

    function playAudio () {
        bgaudio.play()        
        bgaudioTrigger.html(onImg)
    }

    //playAudio()

    let modal = $("#modal"),
        artistModal = $("#artistModal");
    // modal.addClass('active')
    /*$("body").on('click', '.modal-trigger', function(event) {
        event.preventDefault();
        modal.addClass('active');
        $("body").css({ overflow: 'hidden' });
        let fullimg = $(this).data('img');
        let imgCap = $(this).data('cap');
        // console.log(fullimg)
        modal.find('#modalImg').attr('src', fullimg);
        modal.find('#model-cap').html(imgCap);
    });*/

    /*$("body").on('click', '.know', function(event) {
        event.preventDefault();
        artistModal.addClass('active');
        $("body").css({ overflow: 'hidden' })
    });*/

    /*$("body").on('click', '.modal-close, .modal-overlay', function(event) {
        event.preventDefault();
        $(".modal").removeClass('active')
        $("body").css({ overflow: 'auto' })
    });*/


    //Slidk slider
    $('.gallery-slider').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        // prevArrow: '<button type="button" class="slick-prev"><img src="images/left-arrow.png"></button>',
        // nextArrow: '<button type="button" class="slick-next"><img src="images/right-arrow.png"></button>',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 3,
                    // infinite: true,
                    // dots: true
                }
            },/*
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },*/
        ]
    });
});