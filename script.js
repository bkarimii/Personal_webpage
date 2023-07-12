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

    // Array of tooltip texts
const tooltipTexts = [
    "Learn Python from scratch ",
    "ReactJS for web Developers ",
    "Advance NodeJs ",
    "Ubunto For Absoloute Beginers",
    "JavaScript From Zero to Hero",
    "Introduction to HTML&CSS"
  ];
  ////////


    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
  
    /*  function showSlide() {
        for (let i = 0; i < 3; i++) {
          const imgIndex = (slideIndex + i) % imageSources.length;
          slides[i].src = imageSources[imgIndex];
        }
      } */

      for (let i = 0; i < slides.length; i++) {
        const txtIndex = (slideIndex + i) % tooltipTexts.length;
        slides[i].title = tooltipTexts[txtIndex];
      }

      function showSlide() {
        for (let i = 0; i < slides.length; i++) {
          const imgIndex = (slideIndex + i) % imageSources.length;
          const txtIndex = (slideIndex + i) % tooltipTexts.length;
          slides[i].src = imageSources[imgIndex];
          slides[i].title = tooltipTexts[txtIndex];
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
  
    // Signup form
    const signupForm = document.getElementById("signupForm");
    let signupSuccess = false;
  
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Simulate successful signup
      signupSuccess = true;
  
      if (signupSuccess) {
        alert("Signup successful! Welcome to BlaBla.com");
        signupForm.reset(); // Reset the form fields
      }
    });
  

  });

/*----------------------------------------------------------------*/

  function redirectToCart(imageUrl, courseName) {
    const cartUrl = `cart.html?course=${encodeURIComponent(courseName)}&image=${encodeURIComponent(imageUrl)}`;
    window.location.href = cartUrl;
  }

  function addToCart(courseName) {
    // Get the cart from local storage or initialize it if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected course to the cart
    cart.push(courseName);

    // Store the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
// Get the query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Retrieve the values of the course and image parameters
const course = urlParams.get('course');
const image = urlParams.get('image');

// Use the course and image values to display the selected course and image in the cart
console.log("Selected Course:", course);
console.log("Selected Image URL:", image);

 /* function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
  var popup = document.getElementById('popup');
  popup.style.display = 'block';*/

  
  

  