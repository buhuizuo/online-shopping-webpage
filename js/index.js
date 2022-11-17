window.addEventListener("load", function () {
  var arrow_l = document.querySelector(".arrow_l");
  var arrow_r = document.querySelector(".arrow_r");
  var focus = document.querySelector(".focus");
  var pics = focus.querySelector("ul");

  //auto play
  var timer = setInterval(function () {
    arrow_r.click();
  }, 2000);
  //arrow shows when mouse enter
  focus.addEventListener("mouseenter", function () {
    arrow_r.style.display = "block";
    arrow_l.style.display = "block";
    clearInterval(timer);
    timer = null;
  });
  //arrow not show when mouse leave
  focus.addEventListener("mouseleave", function () {
    arrow_r.style.display = "none";
    arrow_l.style.display = "none";
    timer = setInterval(function () {
      arrow_r.click();
    }, 3000);
  });

  //create dots by number of pics
  var dots = document.querySelector(".dots");
  var focusWidth = focus.offsetWidth;
  var num = 0;
  for (var i = 0; i < pics.children.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("index", i);
    dots.appendChild(li);
    dots.children[i].addEventListener("click", function () {
      //pai ta
      for (var j = 0; j < dots.children.length; j++) {
        dots.children[j].className = "";
      }
      //first dot is selected
      this.className = "current";
      //pics move
      var index = this.getAttribute("index");
      if (num == pics.children.length - 1) {
        pics.style.left = 0;
      }
      num = index;
      moveToRight(pics, -focusWidth * num, 15);
    });
  }
  dots.children[0].className = "current";

  //click right arrow to move focus
  pics.appendChild(pics.firstElementChild.cloneNode(true));
  var flag = true;
  arrow_r.addEventListener("click", function () {
    if (flag) {
      flag = false;
      num++;
      //after show all pics, jump to the first pic,then slide to second
      if (num == pics.children.length) {
        pics.style.left = 0;
        num = 1;
      }
      //play from first to second
      moveToRight(pics, -focusWidth * num, 15, function () {
        flag = true;
      });
      // dots change too
      for (var j = 0; j < dots.children.length; j++) {
        dots.children[j].className = "";
      }
      //if showing clone pic, dot goes to the first
      if (num == pics.children.length - 1) {
        dots.children[0].className = "current";
      } else {
        dots.children[num].className = "current";
      }
    }
  });

  //click left arrow to move focus

  arrow_l.addEventListener("click", function () {
    if (flag) {
      //close click function till all animations played
      flag = false;
      //if at first pic, quickly jump to last clone pic then slide to prev pic
      if (num == 0) {
        num = pics.children.length - 1;
        pics.style.left = -num * focusWidth + "px";
      }
      num--;
      //play from first to second
      moveToRight(pics, -focusWidth * num, 15, function () {
        flag = true;
      });
      // dots change too
      for (var j = 0; j < dots.children.length; j++) {
        dots.children[j].className = "";
      }
      //if showing clone pic, dot goes to the first
      if (num == pics.children.length - 1) {
        dots.children[0].className = "current";
      } else {
        dots.children[num].className = "current";
      }
    }
  });
});
