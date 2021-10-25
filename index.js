const toggleIcon = document.querySelector(".toggle-nav");
const sideBar = document.querySelector(".sidebar");
const mainContent = document.querySelector("main");
console.log(mainContent);
function switchToggle(e) {
  sideBar.classList.toggle("hide");
  mainContent.classList.toggle("full");
}
toggleIcon.addEventListener("click", switchToggle, true);
