document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const imageSources = ["C:\Users\bkari\OneDrive\Desktop\personal_webpage\Personal_webpage\Carousel",
     "image2.jpg", "image3.jpg"];
  
    function showSlide() {
      // Set the src attribute of the current slide
      slides[slideIndex].src = imageSources[slideIndex];
    }
  
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      showSlide();
    }
  
    // Automatically move to the next slide every 3 seconds
    setInterval(nextSlide, 2000);
  
    // Show the initial slide
    showSlide();
  });
  