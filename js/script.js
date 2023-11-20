$('.menuIcon').click(function() {
    $('#menuIcon').toggleClass("opened");
    $('nav').toggleClass("opened");
    $('.main-container').toggleClass("opened")
})

var x = window.matchMedia("(max-width: 900px)")
function changeIcon(x) {
    if (x.matches) { // If media query matches
        // document.getElementById("changingIcon").classList.add("bi-list");
        document.getElementById("changingIcon").style.fontSize = "2rem";
    } else {
        // document.getElementById("changingIcon").classList.remove("bi-list");
        document.getElementById("changingIcon").style.fontSize = "2rem";
    }
}

changeIcon(x) // Call listener function at run time
x.addListener(changeIcon) // Attach listener function on state changes