$(document).ready(function(){$("#alan").hide();$("#alanAnswer").click(function(){$("#alan").toggle(1000);if ($("#alanAnswer").text() === "Show Answer") {$("#alanAnswer").text("Hide Answer");}else {       $("#alanAnswer").text("Show Answer");    }});$("#aaron").hide();$("#aaronAnswer").click(function(){$("#aaron").toggle(1000);if ($("#aaronAnswer").text() === "Show Answer") {$("#aaronAnswer").text("Hide Answer");}else {       $("#aaronAnswer").text("Show Answer");    }});  $('.icon-menu').click(function() {    $('.menu').animate({      left: "0px"    }, 200);    $('body').animate({      left: "285px"    }, 200);  });  // Then push them back  $('.icon-close').click(function() {    $('.menu').animate({      left: "-285px"    }, 200);    $('body').animate({      left: "0px"    }, 200);
    $(".h").css("background-color", "white");  });
$("#abt").click(function(){
$(".h").css("background-color", "orange");
});
});

