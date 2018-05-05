function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// on load finished
$(window).load(function() {
    // select element and fade it out
    $('.loading').fadeOut();
});
