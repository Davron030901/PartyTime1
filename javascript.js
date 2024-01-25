const btn = document.getElementById("menuSwitch");
const nav = document.getElementById("navDraw");
const x = document.getElementById("sp1");
const y = document.getElementById("sp2");
btn.addEventListener("click", () => {
  if (btn.classList.contains("active")) {
    nav.style.right = 0;
    x.classList.add("sp_1");
    y.classList.add("sp_2");
    btn.classList.remove("active");
  } else {
    nav.style.right = "-100%";
    x.classList.remove("sp_1");
    y.classList.remove("sp_2");
    btn.classList.add("active");
  }
});