document.getElementById('button').addEventListener('click', function(){
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur reseau');
            }
            return response.text(); 
        })
        .then(data =>{
            let paragraph = document.getElementById('expression');
            paragraph.textContent=data; 
        })
        .catch(error => console.error("Erreur :", error));
});