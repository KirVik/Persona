$(function (){
    $('.slader').slick({
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        prevArrow: false,
        nextArrow: false,
    });
    
    // гамбургер
    $('.menu-open').on("click", function (event) {
        event.stopPropagation();
        $('.menu-collapse').toggleClass('d-none');
        $(".menu, li .top-menu__item").toggleClass("menu-opened");
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.menu-open').length) {
            $(".menu, li .top-menu__item").removeClass("menu-opened");
            $('.menu-collapse').addClass('d-none');

        };
    });
    //форма
    $('.zakaz').click(function (e) {
        e.preventDefault();
        $('#formModal').arcticmodal();
    });
    
});

$(document).ready(function() {
    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );
})