/* script.js */
// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}

// Moving Text
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;

function moveText() {
    pos1 -= 1;
    pos2 -= 1;
    pos3 -= 1;

    text1.style.transform = `translateX(${pos1}px)`;
    text2.style.transform = `translateX(${pos2}px)`;
    text3.style.transform = `translateX(${pos3}px)`;

    if (pos1 < -text1.offsetWidth) pos1 = window.innerWidth;
    if (pos2 < -text2.offsetWidth) pos2 = window.innerWidth;
    if (pos3 < -text3.offsetWidth) pos3 = window.innerWidth;

    requestAnimationFrame(moveText);
}

moveText();


// JavaScript for the menu button functionality
const menuButton = document.querySelector('.menu-button');
const menuList = document.querySelector('.menu-list');
        
menuButton.addEventListener('click', function() {
menuList.classList.toggle('show-menu');
});
        
// Close the menu when clicking outside
window.addEventListener('click', function(event) {
  if (!event.target.matches('.menu-button') && !event.target.matches('.menu-list a')) {
  if (menuList.classList.contains('show-menu')) {
menuList.classList.remove('show-menu');
}
}
});

const container = document.querySelector('.container');
        const boxes = document.querySelectorAll('.box');
        const numItems = boxes.length;
        let currentIndex = 0;
        let intervalId;

        function initializeGallery() {
            boxes.forEach((item, index) => {
                if (index === 0) {
                    item.classList.add('active');
                } else if (index === 1) {
                    item.classList.add('next');
                } else {
                    item.classList.add('next');
                }
            });
        }

        function nextSlide() {
            const currentItem = boxes[currentIndex];
            const nextIndex = (currentIndex + 1) % numItems;
            const nextItem = boxes[nextIndex];

            currentItem.classList.remove('next');
            currentItem.classList.add('active');
            nextItem.classList.remove('active');
            nextItem.classList.add('prev');

            currentIndex = nextIndex;

            setTimeout(() => {
                currentItem.classList.remove('prev');
            }, 1000);
        }

        function startGallery() {
            intervalId = setInterval(nextSlide, 4000);
        }

        function stopGallery() {
            clearInterval(intervalId);
        }

        initializeGallery();
        startGallery();

        container.addEventListener('mouseenter', stopGallery);
        container.addEventListener('mouseleave', startGallery);
        
        function validateForm() {
            let isValid = true;
      
            // Name validation
            const nameInput = 
      
      document.getElementById("name");
            const nameError = document.getElementById("nameError");
            if (nameInput.value.trim() === "") {
              nameError.textContent = "Name is required";
              isValid = false;
            } else {
              nameError.textContent = "";
            }
      
            // Email validation (basic non-empty check)
            const emailInput = document.getElementById("email");
            const emailError = document.getElementById("emailError");
      
            if (emailInput.value.trim() === "") {
              emailError.textContent = "Email is required";
              isValid = false;
            } else {
              emailError.textContent = "";
            }
      
            // Message validation
            const messageInput = document.getElementById("message");
            const messageError = document.getElementById("messageError");
            if (messageInput.value.trim() === "") {
              messageError.textContent = "Message is required";
      
              isValid = false;
            } else {
              messageError.textContent = "";
            }
      
            return isValid;
          }
      
          // Google Maps Embed
          function initMap() {
            const schoolLocation = { lat: 0.3435, lng: 32.6375 }; // Replace with the actual latitude and longitude of the school in Kampala
      
            const map = new google.maps.Map(document.getElementById('map'), {
              center: schoolLocation,
              zoom: 15 // Adjust the zoom 
      
      //level as needed
            });
      
            const marker = new google.maps.Marker({
              position: schoolLocation,
              map: map,
              title: 'Uganda Martyrs\' Secondary School Namugongo' // Optional marker title
            });
          }

          function addData() {
            const table = document.getElementById("mytable").getElementsByTagName("tbody")[0];
            const newRow = table.insertRow(table.rows.length);
            
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
        
            const departmentName = prompt("Enter Name of Department: ");
            const name = prompt("Enter name: ");
        
            if(departmentName && name){
                cell1.innerHTML = departmentName;
                cell2.innerHTML = name;
            }else {
                table.deleteRow(table.rows.length-1);
            }
        
        }
        document.addEventListener("DOMContentLoaded",function(){
          console.log("javascript is running!");
      
          const accordions = document.querySelectorAll(".accordion");
      
          accordions.forEach(accordion => {
              accordion.addEventListener("click", function(){
                  this.classList.toggle("active");
                  const panel = this.nextElementSibling;
                  if(panel.style.display ==="block"){
                      panel.style.display = "none";
                  }else {
                      panel.style.display = "block";
                  }
              });
          });
      });


      

const darkModeToggle = document.getElementById('dark-mode-toggle'); // Assuming you have an element with this ID
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  // You might also want to save the user's preference in local storage
});

      