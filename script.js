

document.addEventListener("DOMContentLoaded",function(){
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPage = link.dataset.page;
        const linkHref = link.getAttribute("href");

        if(linkPage && linkPage.toLowerCase()=== currentPage.toLowerCase()) {
            link.classList.add("active");

            const parentLink = findParentLink(linkHref,navLinks);
            if(parentLink){
                parentLink.classList.add("active");
            }
        }
    });

    const dropdownBtn = document.querySelector(".dropdownbtn");
    if (dropdownBtn) {
        const dropdownContent = document.querySelector(".dropdown-content");
        dropdownBtn.addEventListener("click",function() {
            dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" :"block";

        });
    }
    function findParentLink(childHref,allLinks){
        if(childHref === "Departments.html"|| childHref ==="Curriculum.html"|| childHref==="UNEB Results.html"){
            return document.querySelector('a[data-page="Academics"]');
            }
            return null;
        }
});


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

let index=0;
const testimonials=document.querySelectorAll(".testimonials");
const testimonialContainer=document.querySelector(".testimonial-container");

function showTestimonial(n){
    testimonials.forEach((testimonial,i) =>{
        testimonial.classList.remove("active");
        if(i===n){
            testimonial.classList.add("active");
        }
    });
}

function nextTestimonial(){
    index=(index+1)%testimonials.length;
    showTestimonial(index);
}

function prevTestimonial(){
    index = (index-1 + testimonials.length)% testimonials.length;
    showTestimonial(index);
}

function addTestimonial(){
    const userText= document.getElementById("userTestimonial").ariaValueMax;
    const userName = document.getElementById("userName").ariaValueMax;

    if(userText.trim()!==""&&userName.trim()!==""){
        const newTestimonial = document.createElement("div");
        newTestimonial.classList.add("testimonial");
        newTestimonial.textContent = '"${userText}"-${userName}';
        testimonialContainer.insertBefore(newTestimonial,testimonialContainer.children[testimonialContainer.children.length-1]);
        document.getElementById("userTestimonial").value="";
        document.getElementById("userName").value="";
    }
}

setInterval(nextTestimonial,3000);