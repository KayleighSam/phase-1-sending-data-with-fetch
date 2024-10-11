// Add your code here
function submitData(name, email) {
    // Create the data object
    const Data = {
        name: name,
        email: email
    };

    // Make the POST request
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Data)
    })
    .then(response => response.json()) 
    .then(data => {
        // append the'class'to make the post successful
        const body= document.querySelector('body');
        const p = document.createElement('p');
        p.textContent = data.id
         body.appendChild(p);
        
    })
    // append the error in the DOM to showcase any failure 
    .catch((error) => {
        const body= document.querySelector('body');
        const p = document.createElement('p');
        p.textContent = "Unauthorized Access."
        body.appendChild(p);
    
        
    });
}
submitData('sam', 'sam@gmail.com');