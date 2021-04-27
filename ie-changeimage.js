if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    var el_images = document.getElementsByTagName("img"), i = 0;

    for(i = 0; i < el_images.length; i++) {
        var target = el_images[i],
            target_width = target.offsetWidth,
            target_height = target.offsetHeight,
            src = target.getAttribute("src") || "",
            classimg = target.getAttribute('class') || "",
            altimage = document.createElement("div");
            
        altimage.setAttribute("class", "alt-image "+classimg);
        altimage.setAttribute("style", "width:"+target_width+"px; height: "+target_height+"px; background-image: url("+src+");");

        target.insertAdjacentElement('afterend', altimage);
        target.style.display = 'none';
    }
}
