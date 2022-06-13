const sliderImages = document.querySelectorAll('.slide-in');


function scroll(e) {
sliderImages.forEach(sliderImage => {
    //position where half of the image is shown and should start the animation
    const halfIn = (window.innerHeight + window.scrollY) - sliderImage.height/2;
    //position of the bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    //if position of the half of the image is bigger than position of the top of the image
    const appearInHalf = halfIn > sliderImage.offsetTop;
    //if position of the bottom of the image is bigger than position of my cursor
    const notScrolledPast = window.scrollY < imageBottom;
    if(appearInHalf && notScrolledPast) {
        sliderImage.classList.add('active');
    } else {
        sliderImage.classList.remove('active');
    }
})
}

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  window.addEventListener('scroll', debounce(scroll));