$(function() {
    $(".slider__items").slick({
        prevArrow: '<img class="slick-arrow slick-prev" src="./images/icons/slider-prev.svg" alt="prev arrow">',
        nextArrow: '<img class="slick-arrow slick-next" src="./images/icons/slider-next.svg" alt="next arrow">'
    });
    $(".menu-toggle").on("click", () => {
        $(".menu-toggle, .menu__list").toggleClass("active");
    });
    AOS.init();
});