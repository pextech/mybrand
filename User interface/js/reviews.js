const reviews = document.querySelector('#reviewItems');

db.collection('reviews').onSnapshot((snapshot)=>{

    let changes = snapshot.docChanges();
 
changes.forEach(change => {
    
    if(change.type == 'added'){
        

        getReviews(change.doc);

    }
    else if(change.type == 'removed' ){
        let tr = reviews.querySelector('[data-id='+ change.doc.id + ']');
        reviews.removeChild(tr);
    }

});



});


function getReviews(element){

    let row  = document.createElement('tr');
    let email = document.createElement('td');
    let name = document.createElement('td');
    let phone = document.createElement('td');
    let message = document.createElement('td');
    
    let deleteBtn = document.createElement('div');

    row.setAttribute('data-id',element.id);
    name.textContent = element.data().name;
    email.textContent = element.data().email;
    phone.textContent = element.data().phone;
    message.textContent = element.data().message;
    deleteBtn.textContent = 'Delete';

    console.log(element.id)

    row.appendChild(name);
    row.appendChild(email);
    row.appendChild(phone);
    row.appendChild(message);
    row.appendChild(deleteBtn);

    reviews.appendChild(row);


    deleteBtn.addEventListener('click',(e)=>{
        e.preventDefault();

        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('reviews').doc(id).delete();
    
    });

}

   
         
    






