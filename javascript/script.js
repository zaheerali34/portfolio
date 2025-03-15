// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

const iconMenu = document.querySelector("#iconMenu");
const menuShow = document.querySelector("#menuShow");

iconMenu.addEventListener("click", () => {
  menuShow.classList.toggle("show");
});
