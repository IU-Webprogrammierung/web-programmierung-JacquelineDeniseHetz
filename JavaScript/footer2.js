/* JS-Dokument Footer 2 - Hintere Struktur*/

// Footer einbinden
fetch('../html/footer2.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
})
.catch(error => console.log('Footer konnte nicht geladen werden:', error));