// Footer einbinden
fetch('../html/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
})
.catch(error => console.log('Footer konnte nicht geladen werden:', error));