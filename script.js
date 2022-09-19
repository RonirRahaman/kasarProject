const body = document.querySelector("body");
const Navbar = document.querySelector(".navbar");
const scrollbtn = document.querySelector(".scroll-up-btn");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("scrolloff");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("scrolloff");
}

window.onscroll = ()=>{
    this.scrollY > 20 ? Navbar.classList.add("puppy"):Navbar.classList.remove("puppy");

} 

// let slideSearch = document.querySelector(".me-2");

// function showBar() {
//   slideSearch.style.display = "block";
// }