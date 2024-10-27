var imgList = document.getElementById('imgList');
var scrollRight = document.getElementById('scroll-right');
var scrollLeft = document.getElementById('scroll-left');

// when user clicks on the right arrow, ul scrolls 750px to the right
scrollRight.addEventListener('click', (event) => {
  imgList.scrollBy(750, 0);
});

// when user clicks on the left arrow, ul scrolls 750px to the left
scrollLeft.addEventListener('click', (event) => {
  imgList.scrollBy(-750, 0);
});

/*photo gallery*/

const modal = document.getElementById('galleryModal');
const closeModal = document.getElementById('closeModal');
const latestDivs = document.querySelectorAll('.latest');

// opens modal when any .latest div is clicked
latestDivs.forEach(div => {
  div.addEventListener('click', () => {
      console.log("Latest element clicked!");
      modal.style.display = 'flex';
  });
});

// closes modal when the x button or outside of the modal content is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

/*modal hover-scrolling feature*/

const gallery = document.getElementById("expandedGallery");
const leftHover = document.getElementById("leftHover");
const rightHover = document.getElementById("rightHover");

let scrollInterval;

const startScroll = (direction) => {
    scrollInterval = setInterval(() => {
        gallery.scrollLeft += direction === "left" ? -20 : 20; //scroll speed
    }, 40);
};

const stopScroll = () => {
    clearInterval(scrollInterval);
};

// start scrolling left when hovering over left zone
leftHover.addEventListener("mouseenter", () => startScroll("left"));
leftHover.addEventListener("mouseleave", stopScroll);

// start scrolling right when hovering over right zone
rightHover.addEventListener("mouseenter", () => startScroll("right"));
rightHover.addEventListener("mouseleave", stopScroll);
