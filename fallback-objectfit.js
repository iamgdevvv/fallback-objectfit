if ('objectFit' in document.documentElement.style === false) {
    var el_images = document.querySelectorAll("img:not([src*='svg'])"), i = 0;

    for(i = 0; i < el_images.length; i++) {
        (el_images[i].runtimeStyle || el_images[i].style).background = "url(\"".concat(el_images[i].src, "\") no-repeat 50%/").concat(el_images[i].currentStyle ? el_images[i].currentStyle['object-fit'] : el_images[i].getAttribute('data-object-fit'));
        el_images[i].src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='".concat(el_images[i].width, "' height='").concat(el_images[i].height, "'%3E%3C/svg%3E");
    }
}