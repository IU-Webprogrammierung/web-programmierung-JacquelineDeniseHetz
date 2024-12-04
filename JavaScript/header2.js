/* JS-Dokument Versuch Header auszulagern*/
/* Beim Footer hat es geklappt, jedoch nicht richtig beim Header aufgrund der Einschränkung wegen PHP (Bei meinem PHP-testprojekt hat es funktioniert)*/
document.addEventListener('DOMContentLoaded', function () {
    fetch('../html/header2.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header2-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Fehler beim Laden des Headers:', err));
});