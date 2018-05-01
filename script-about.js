$(document).ready(function(){
    var scroll_pos = 0;
    var h = window.innerHeight;

    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > h) {
            document.body.style.backgroundColor = "#f5f5f5";
            document.getElementById("nav-color").style.color = "#000";
            document.getElementById("nav-icon-color-one").style.fill = "#000";
            document.getElementById("nav-icon-color-two").style.fill = "#000";
            document.getElementById("nav-icon-color-three").style.fill = "#000";
            document.getElementById("nav-icon-color-four").style.fill = "#000";
            document.getElementById("about-icon-design").style.color = "#000";
            document.getElementById("about-icon-motion").style.color = "#000";
            document.getElementById("about-icon-html").style.color = "#000";
        } else if(scroll_pos < h) {
            document.body.style.backgroundColor = "#898985";
            document.getElementById("nav-color").style.color = "#fff";
            document.getElementById("nav-icon-color-one").style.fill = "#fff";
            document.getElementById("nav-icon-color-two").style.fill = "#fff";
            document.getElementById("nav-icon-color-three").style.fill = "#fff";
            document.getElementById("nav-icon-color-four").style.fill = "#fff";
            document.getElementById("about-icon-design").style.color = "#fff";
            document.getElementById("about-icon-motion").style.color = "#fff";
            document.getElementById("about-icon-html").style.color = "#fff";
        }
    });
});
