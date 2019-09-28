$(function(){
  $("#nav-placeholder").load("nav.html");
});

$(function(){
  $("#footer-placeholder").load("footer.html");
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
