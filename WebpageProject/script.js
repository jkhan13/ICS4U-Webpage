// function showTime() {
//   document.getElementById('currentTime').innerHTML = new Date().toUTCString();
// }
// showTime();
// setInterval(function () {
//   showTime();
// }, 1000);

var imgList = document.getElementById('imgList');
var scrollRight = document.getElementById('scroll-right');
var scrollLeft = document.getElementById('scroll-left');

// When a user clicks on the right arrow, the ul will scroll 750px to the right
scrollRight.addEventListener('click', (event) => {
  imgList.scrollBy(750, 0);
});

// When a user clicks on the left arrow, the ul will scroll 750px to the left
scrollLeft.addEventListener('click', (event) => {
  imgList.scrollBy(-750, 0);
});