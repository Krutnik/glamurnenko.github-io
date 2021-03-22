window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 821 || document.documentElement.scrollTop > 821) {
        document.getElementById("navbar").style.position = "fixed";
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.width = "1290px";
        document.getElementById("navbar").style.backgroundColor = "black";
    }
    else {
        document.getElementById("navbar").style.position = "relative";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.height = "50px";
    }
}