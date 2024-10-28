//loads all this only after everything has loaded
document.addEventListener('DOMContentLoaded', () => {
    var imgList = document.getElementById('imgList');
    var scrollRight = document.getElementById('scroll-right');
    var scrollLeft = document.getElementById('scroll-left');

//when user clicks on the right arrow, ul scrolls 750px to the right
scrollRight.addEventListener('click', (event) => {
  imgList.scrollBy(750, 0); //how much you scroll by
});

//when user clicks on the left arrow, ul scrolls 750px to the left
scrollLeft.addEventListener('click', (event) => {
  imgList.scrollBy(-750, 0); //how much you scroll by
});


/*ARTICLESSS*/

// photo gallery+modal variables
if (window.location.pathname.includes('article1.html') || window.location.pathname.includes('article2.html') || window.location.pathname.includes('article3.html') || window.location.pathname.includes('article4.html')  || window.location.pathname.includes('article5.html')  || window.location.pathname.includes('about.html')) {
    const modal = document.getElementById('galleryModal');
    const closeModal = document.getElementById('closeModal');
    const photo = document.querySelectorAll('.photo');
    const gallery = document.getElementById("expandedGallery");
    const leftHover = document.getElementById("leftHover");
    const rightHover = document.getElementById("rightHover");

    let scrollInterval;

//opens modal when any photo is clicked
    photo.forEach(div => {
    div.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
    });

//closes modal when the x button or outside of the modal content is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

//modal hover-scrolling feature
    const startScroll = (direction) => {
        scrollInterval = setInterval(() => {
            gallery.scrollLeft += direction === "left" ? -20 : 20; //scroll speed
        }, 40);
    };

    const stopScroll = () => {
        clearInterval(scrollInterval);
    };

//start scrolling left when hovering over left zone
    leftHover.addEventListener("mouseenter", () => startScroll("left"));
    leftHover.addEventListener("mouseleave", stopScroll);

//start scrolling right when hovering over right zone
    rightHover.addEventListener("mouseenter", () => startScroll("right"));
    rightHover.addEventListener("mouseleave", stopScroll);

}


});