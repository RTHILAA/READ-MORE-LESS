let btn = document.getElementById("btn");
let dots = document.getElementById("dots");
let moreText = document.getElementById("more");

btn.addEventListener("click", () => {
    if (dots.style.display === "inline") {
        dots.style.display = "none";
        btn.innerHTML = "Read Less";
        moreText.style.display = "inline";
    } else {
        dots.style.display = "inline";
        btn.innerHTML = "Read More";
        moreText.style.display = "none";
    }
});