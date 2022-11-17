window.addEventListener("load", function () {
  var arrow_l = document.querySelector(".arrow_l");
  var arrow_r = document.querySelector(".arrow_r");
  var focus = document.querySelector(".focus");

  focus.addEventListener("mouseenter", function () {
    arrow_r.style.display = "block";
    arrow_l.style.display = "block";
  });
});
