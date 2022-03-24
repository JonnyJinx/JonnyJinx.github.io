var mainNav = document.getElementById('main-nav');
var screenWidth = screen.width;
var bool = false;

//If hamburger menu was closed (which hides the nav bar), the first if statement ensures that the nav bar reappears when resized to above 830px. The second and third if statements control whether or not the hamburger menu will be open or closed when the screen is resized to 830px or below, depending on the boolean.
window.addEventListener('resize', function(event) {
    if (this.window.innerWidth >= 830) {
        mainNav.style.display = 'block';}
    if (this.window.innerWidth < 830) {
        if(bool === false) {
            mainNav.style.display = 'none';}
    }
})

//code adapted from W3Schools, 2022
function hamburgerToggle() {
    if (mainNav.style.display == "block") {
        mainNav.style.display = 'none';
        bool = false;
    } else {
        mainNav.style.display = "block";
        bool = true;
    }
}
//end of adapted code