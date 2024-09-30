$(document).ready(function() {
    console.log("desde dentro de JQUERY");

    document.getElementById('linkedin-icon').addEventListener('click', function(event) {
        event.preventDefault(); 
        window.open("https://www.linkedin.com/in/leonardo-palacios-solís-wzv", "_blank"); 
    });
    
});
