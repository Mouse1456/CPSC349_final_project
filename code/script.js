// Function to toggle the menu and icon classes
function toggleMenu() 
{
    // Select the element with the class 'menu-links'
    const menu = document.querySelector(".menu-links");

    // Select the element with the class 'hamburger-icon'
    const icon = document.querySelector(".hamburger-icon");

    // Toggle the 'open' class on the menu element to show/hide the menu
    menu.classList.toggle("open");

    // Toggle the 'open' class on the icon to animate the hamburger icon
    icon.classList.toggle("open");
}

