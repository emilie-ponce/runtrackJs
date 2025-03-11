function showhide() {
    const articleElement = document.getElementById("citation");
    if (articleElement.style.display === "none") {
        articleElement.style.display = "block";
    } else {
        articleElement.style.display = "none";
    }
}

document.getElementById("button").addEventListener("click", showhide);