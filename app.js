document.querySelector(".icon-menu").addEventListener('click', ()=>{
    // alert("button clicked")
    const nav = document.querySelector(".header-nav nav");
    nav.style.transform = "translateX(0)";
})
document.querySelector(".mobile-content img:last-child").addEventListener("click", ()=>{
    const nav = document.querySelector(".header-nav nav");
    nav.style.transform = "translateX(-100%)"
}
)