$(document).ready(function(){
   
    $("a.mobile").click(function(){
        $(".sidebar").slideToggle('slow');
    });

    window.onresize = function(event){
        if ($(window).width() > 857 ){
            $(".sidebar").show();
        }
    }
    
});



$(document).ready(function(){

    $('#createPost').click(function(){
        $("#addPage").slideToggle("slow");
    });
    $("#close").click(function(){
        $("#addPage").slideToggle("slow");
    });
    $("#closeModal").click(function(){
        $("#addPage").slideToggle("slow");
    });

    
});

$(document).ready(function(){

    $('#createUser').click(function(){
        $("#addUser").slideToggle("slow");
    });
    $("#close").click(function(){
        $("#addUser").slideToggle("slow");
    });
    $("#closeModal").click(function(){
        $("#addUser").slideToggle("slow");
    });

    
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


// function logUserIn(user){


// window.location='admin/admin-dashboard.html';

// }
