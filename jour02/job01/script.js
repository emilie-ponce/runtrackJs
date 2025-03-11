function citation() {
    const articleElement = document.getElementById("citation");
    console.log(articleElement.textContent);
}

document.getElementById("button").addEventListener("click", citation);