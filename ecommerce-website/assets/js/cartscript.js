function addToCart() {
    var countElement = document.getElementsByClassName("action-btn");
    let currentCount = parseInt(countElement.textContent);

    countElement.textContent = currentCount + 1;
    console.log(countElement)
}