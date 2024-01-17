// jQuery code

$(document).ready(function() {
  // Function to toggle responsive menu
  function toggleMenu() {
    $(".responsive-menu").slideToggle();
  }

  // Event listener for menu icon click
  $(".menu-icon").click(function() {
    toggleMenu();
  });
});