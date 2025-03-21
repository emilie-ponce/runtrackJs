const form = document.getElementById('request-form');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const date = document.getElementById('date').value;
    const today = new Date().toISOString().split('T')[0];

    if (date < today){
        message.textContent = "Vous ne pouvez pas demander une autorisation pour une date passée.";
        message.style.color = "red";
        return;
    }

    const data ={
        date: date
    };

    try{
        const response = await fetch('http://localhost:5000/request',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (response.ok){
            message.textContent = "Demande d'autorisation réussie";
            message.style.color = "green";
        } 
        else{
            message.textContent = result.error;
            message.style.color = "red";
        }
    } 
    catch (error){
        message.textContent = "Une erreur est survenue";
        message.style.color = "red";
    }
});
