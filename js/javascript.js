function underlineNavBarLink() {

    var path = window.location.pathname;
    var link;

    if (path.endsWith("home.html")) {
        link = document.getElementById("homeLink");
        link.style.textDecoration = "underline";
    } else if (path.endsWith("gallery.html")) {
        link = document.getElementById("galleryLink");
        link.style.textDecoration = "underline";
    } else if (path.endsWith("contact.html")) {
        link = document.getElementById("contactLink");
        link.style.textDecoration = "underline";
    } else if (path.endsWith("products.html")) {
        link = document.getElementById("productsLink");
        link.style.textDecoration = "underline";
    } else if (path.endsWith("about.html")) {
        link = document.getElementById("aboutLink");
        link.style.textDecoration = "underline";
    }

}

window.onload = function () {

    underlineNavBarLink();
};