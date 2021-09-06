
/*---------------Navbar Hide and Unhide-----------*/

/* Note: When the user scrolls down, hide the navbar.
 When the user scrolls up, show the navbar */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-head").style.top = "0";
  } else {
    document.getElementById("main-head").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}