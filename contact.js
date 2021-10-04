document.getElementById('form').addEventListener('submit', function(event) {
    document.getElementById('open-modal').style.display = "block";
    event.preventDefault();
    
});
    document.getElementById('close').addEventListener('click', function() {
        document.getElementById('open-modal').style.display = "none";
    });
    

