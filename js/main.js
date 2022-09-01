/* Start Header Navbar */
const siteHeaderBtn = document.querySelector(".header-part__btn")
const siteHeader = document.querySelector("#site-header")

siteHeaderBtn.addEventListener("click", () => {
    siteHeader.classList.toggle("header-part__nav-box-on")
})

window.addEventListener("resize", function () {
    if (window.innerWidth > 700)
        siteHeader.classList.remove("header-part__nav-box-on");
});
/* End of Header Navbar */