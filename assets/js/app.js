const navBtn = document.getElementById("nav_btn");
const megaMenu = document.getElementById('mega_menu_wrapper');
const close = document.getElementById("clos");
const edionBtn = document.querySelector('.edition_text');
const editionArr = document.querySelector('.edBtn');
const editionHid = document.querySelector('.edition_hid');
const search_btn = document.getElementById("search_btn");
navBtn.addEventListener("click", () => {
    megaMenu.style.left = "0%";
    navBtn.style.display = 'none';
    close.style.display = "block";

})
search_btn.addEventListener("click", () => {
    megaMenu.style.left = "0%";
    search_btn.style.display = 'none';
    navBtn.style.display = 'none';
    close.style.display = "block";

})
close.addEventListener("click", () => {
    megaMenu.style.left = "-999%";
    navBtn.style.display = 'block';
    search_btn.style.display = 'block';
    close.style.display = "none";

})

edionBtn.addEventListener("click", () => {
    editionHid.classList.toggle("eddone");
    editionArr.classList.toggle("active");

})