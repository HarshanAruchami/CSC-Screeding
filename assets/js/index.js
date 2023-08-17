
  //Navbar Scrolldown BG-color Changes
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });