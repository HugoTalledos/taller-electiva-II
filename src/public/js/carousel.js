const $owlCarousel = $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    slideSpeed: 300,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['<svg width="50"  height="50" viewBox="-10 0 50 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>', '<svg width="50" height="50" viewBox="-10 0 50 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>']
});
$($owlCarousel).on("changed.owl.carousel", e => {
    $(".owl-slide-animated").removeClass("is-transitioned");
    const $currentOwlItem = $(".owl-item").eq(e.item.index);
    $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
});
/*you have to bind initialized event before owl's initialization (see demo) */
$(".owl-carousel").on("initialized.owl.carousel", () => {
    setTimeout(() => {
        $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
    }, 200);
});
$(".owl-carousel").on("initialized.owl.carousel", () => {
    setTimeout(() => {
        // other code here
        $("section").show();
    }, 200);
});

function setOwlDotsPosition() {
    const $target = $(".owl-item.active .owl-slide-text");
    doDotsCalculations($target);
}

function doDotsCalculations(el) {
    const height = el.height();
    const {
        top,
        left
    } = el.position();
    const res = height + top + 20;
    $(".owl-carousel .owl-dots").css({
        top: `${res}px`,
        left: `${left}px`
    });
}
$($owlCarousel).on("resize.owl.carousel", () => {
    setTimeout(() => {
        setOwlDotsPosition();
    }, 50);
});
$($owlCarousel).on("changed.owl.carousel", e => {
    // other code here
    const $currentOwlItem = $(".owl-item").eq(e.item.index);
    const $target = $currentOwlItem.find(".owl-slide-text");
    doDotsCalculations($target);
});
//style of svg
$(document).ready(function() {
    $(this).find(" svg").attr("fill", "#fff");
});
$($owlCarousel).trigger("refresh.owl.carousel");