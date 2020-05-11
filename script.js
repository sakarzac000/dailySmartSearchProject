function returnSearch(event) {
    var x = event.keyCode;
    var text = document.querySelector('.search-content').value;
    if (x == 13){
        url = "file:///C:/Users/Admin/Desktop/Projects/Me/Bottega/dailySmartSearch/results.html?name=" + encodeURIComponent(text);
        document.location.href = url;
        return;
    }
}

function returnToHome() {
    document.location.href = "file:///C:/Users/Admin/Desktop/Projects/Me/Bottega/dailySmartSearch/index.html"
    return;
}