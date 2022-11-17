// $(function () {
//   //1.show&hide elevator when scroll to first item
//   var itemOffsetTop = $(".applicans").offset().top;
//   var flag = true;
//     $(window).scroll(function ()
//     {
//     if ($(document).scrollTop() >= itemOffsetTop) {
//       $(".fixedtool").fadeIn();
//     } else {
//       $(".fixedtool").fadeOut();
//     }

//     //3. elevator change color when sroll
//     $(".floor .w").each(function (i, domEle) {
//       if (flag) {
//         if ($(document).scrollTop() >= $(domEle).offset().top) {
//           $(".fixedtool li")
//             .eq(i)
//             .addClass("current")
//             .siblings()
//             .removeClass("current");
//         }
//       }
//     });
//   });

//   //2.click to jump to the floor
//   $(".fixedtool li").click(function () {
//     flag = false;
//     var curren = $(".floor .w").eq($(this).index()).offset().top;
//     $("body,html").animate({ scrollTop: curren }, function () {
//       flag = true;
//     });
//     $(this).addClass("current").siblings().removeClass();
//   });
// });
$(function () {
  //1. show and hide elevator
  var showPoint = $(".floor").offset().top;
  var flag = true;
  $(window).scroll(function () {
    if ($(document).scrollTop() >= showPoint) {
      $(".fixedtool").fadeIn();
    } else {
      $(".fixedtool").fadeOut();
    }
    //3.slideBra change color while scrolling
    if (flag) {
      $(".floor .w").each(function (i, domEle) {
        if ($(document).scrollTop() >= $(this).offset().top) {
          $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
        }
      });
    }
  });
  //2.click to jump to the item
  $(".fixedtool li").click(function () {
    flag = false;
    var current = $(".floor .w").eq($(this).index()).offset().top;
    $("body, html").animate({ scrollTop: current }, function () {
      flag = true;
    });
    $(this).addClass("current").siblings().removeClass();
  });
});
