
  $(document).ready(function(){

    // mobile navigation sidebar init.
    $('.sidenav').sidenav();

    //dropdown Menu Admin 
    $(".dropdown-trigger").dropdown({
      // hover: true,
      coverTrigger: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
      });

    // tooltip init.
    $('.tooltipped').tooltip();
  });


