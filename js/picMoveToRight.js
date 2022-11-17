function moveToRight(obj, distance, howFast, callback) {
  //clearInterval to avoid many click  create more timer
  clearInterval(obj.timer);
  //put obj into function, add attribute to obj instead of create a new place in memory
  obj.timer = setInterval(function () {
    if (obj.offsetLeft == distance) {
      clearInterval(obj.timer);
      //callback to do something after timer is up
      // if (callback) {
      //   callback();
      // }
      callback && callback();
    } else {
      //ease out fomular
      var step = (distance - obj.offsetLeft) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      obj.style.left = obj.offsetLeft + step + "px";
      obj.style.top = obj.offsetleft + step + "px";
    }
  }, howFast);
}
