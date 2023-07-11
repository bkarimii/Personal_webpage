document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const imageSources = [
        "https://miro.medium.com/v2/resize:fit:840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg",
        "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
        "https://blog.logrocket.com/wp-content/uploads/2021/04/handling-dispatching-events-nodejs.png",
        "https://repository-images.githubusercontent.com/335476519/61ef634e-0b5f-4d27-9fb6-c64d526c595c",
        "https://eachscape.com/wp-content/uploads/2016/07/JScript.png",
        "https://www.lambdatest.com/blog/wp-content/uploads/2018/11/JPG-2.jpg"
      ];
  
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
  
    function showSlide() {
      for (let i = 0; i < 3; i++) {
        const imgIndex = (slideIndex + i) % imageSources.length;
        slides[i].src = imageSources[imgIndex];
      }
    }
  
    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = imageSources.length - 1;
      }
      showSlide();
    }
  
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= imageSources.length) {
        slideIndex = 0;
      }
      showSlide();
    }
  
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  
    // Show the initial set of images
    showSlide();
  });
  