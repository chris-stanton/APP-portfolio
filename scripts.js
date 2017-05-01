$(document).ready(function(){

  var controller = new ScrollMagic.Controller();
   //create a scene
    new ScrollMagic.Scene({
              //scene lasts for a scroll distance of 100px
              duration: 1000,
              //start scene after scrolling for 50px
              offset: 250
            })
            //pins the element for the the scene's duration
            .setPin(".move")
            .addTo(controller);

  // init controller
  // var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 200}});

//scenes build here
    new ScrollMagic.Scene({triggerElement: "#sec1", duration:200})
            //add class toggle
            .setClassToggle("#high1", "active")
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec2", duration:200})
            //add class toggle
            .setClassToggle("#high2", "active")
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec3", duration:200})
            //add class toggle
            .setClassToggle("#high3", "active")
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec4", duration:200})
            //add class toggle
            .setClassToggle("#high4", "active")
            .addTo(controller);
//animate color and top border in relation to scroll position
  var scene = new ScrollMagic.Scene({triggerElement: "#sec2", duration: 300})
            //the tween durtion can be omitted and defaults to 1
      	    .setTween(".move", { backgroundColor: "blue", scale: 1.7})
      	    .addTo(controller);
    new ScrollMagic.Scene({
              //scene lasts for a scroll distance of 100px
              duration: 10000,
              //start this scene after scrolling for 50px
              offset: 270
            })
            .setPin("#chris")   //pins the element for the the scene's duration
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#chris", duration:"200px", triggerHook:0.35})
            //the tween durtion can be omitted and defaults to 1
            .setTween("#chris", {backgroundColor:"white", scale:.5, width:"200%", left:"0%"})
      	    .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#chris", duration:"200px", triggerHook:0.35})
            //the tween durtion can be omitted and defaults to 1
            .setTween(".scrollmagic-pin-spacer", {left:"-50%"})
      	    .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#chris", duration:"200px", triggerHook:0.35})
            //the tween durtion can be omitted and defaults to 1
            .setTween("#resumebutton", {opacity:"1"})
            .addTo(controller);
// line change below
    new ScrollMagic.Scene({triggerElement: "#chris", duration:"200px", triggerHook:0.35})
            //the tween durtion can be omitted and defaults to 1
            .setTween("#youtube", {opacity:"1"})
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#chris", duration:"200px", triggerHook:0.35})
            //the tween durtion can be omitted and defaults to 1
            .setTween("#linkedin", {opacity:"1"})
            .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#chris", duration:"200px", triggerHook:0.35})
            //the tween durtion can be omitted and defaults to 1
            .setTween("#github", {opacity:"1"})
            .addTo(controller);
//add class toggle
    new ScrollMagic.Scene({triggerElement: "#trigger", duration:"50%"})
            .setClassToggle("#dev", "fadeIn")
            .addTo(controller);

//resume overlay
            $("#resumebutton").on('click',function(){
              $(".resume").addClass("visible");
              $(".overlay").addClass("visible");
            });

//makes resume go away
            $(".overlay").on('click',function(){
              $(".resume").removeClass("visible");
              $(".overlay").removeClass("visible");
            });

    new ScrollMagic.Scene({duration: "10000", offset: "1000px"})
            //pins the element for the the scene's duration
            .setPin("#about")
            .addTo(controller);
    new ScrollMagic.Scene({duration: "10000", offset: "1600px"})
            //pins the element for the the scene's duration
            .setPin("#skills li:nth-child(1)")
            .addTo(controller);
    new ScrollMagic.Scene({duration: "10000", offset: "2050px"})
            //pins the element for the the scene's duration
            .setPin("#skills li:nth-child(2)")
            .addTo(controller);
    new ScrollMagic.Scene({duration: "10000", offset: "2500px"})
            //pins the element for the the scene's duration
            .setPin("#skills li:nth-child(3)")
            .addTo(controller);
    new ScrollMagic.Scene({duration: "10000", offset: "2950px"})
            //pins the element for the the scene's duration
            .setPin("#skills li:nth-child(4)")
            .addTo(controller);
    new ScrollMagic.Scene({duration: "10000", offset: "3400px"})
            //pins the element for the the scene's duration
            .setPin("#skills li:nth-child(5)")
            .addTo(controller);

            $('.background-tint').mouseover(function(){
              $(this).find('.zoom').css("left", "0");
            });

            $('.background-tint').mouseleave(function(){
              $(this).find('.zoom').css("left", "1000px");

              var select = $(this).find('.zoom')
//setTimeout(function(){$(this).find('.zoom').css("z-index", "-10")},500);
              setTimeout(function(){select.css("left", "-1000px")},200);
              setTimeout(function(){select.css("z-index", "-10")},200);
              setTimeout(function(){select.css("z-index", "1")},500);
            });

});//end of doc.ready
