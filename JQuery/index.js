$("h1").addClass("big-title");

// manipulating text or inner HTMl using jquery

$("h1").text("Koni Chiwa");
$("button").html("<em> ohaiyo </em>");

// manipulating attributes using Jquery.

$("a").attr("href" , "https://unacademy.com/batch-group/java-dsa-placement-course/8HXZXSLW");

// Adding Event Listener Using jQuery.
//
// $("button").click(function(){
//   $("h1").css("color" , "grey");
// });

$("body").keydown(function(event){
  $("h1").text(event.key);
})

$("h1").on("mouseover" , function(){
  $("h1").css("color" , "purple");
});

// adding or removing elements using jQuery.

$("h1").before("<button> Ajhine mAshte </button>");
$("h1").after("<button> Ajhine mAshte </button>");
$("h1").prepend("<button> Ajhine mAshte </button>");
$("h1").append("<button> Ajhine mAshte </button>");


// adding animations.

$("button").on("click" , function(){
  $("h1").slideUp().slideDown().animate({opacity:0.5});
});
