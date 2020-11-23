
const subscribe = () => {

    var subscribeForm = document.querySelector('#subForm');
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        db.collection('subscribes').add({

            email: subscribeForm['email'].value

        });

        subscribeForm.reset();

        document.querySelector('#success').style.display = 'block';

        setTimeout(() => {
            document.querySelector('#success').style.display = 'none';
        }, 3000);

    })

}

subscribe();



 var replyForm = document.querySelector('#replyForm');


 replyForm.addEventListener('submit', (e) => {
     e.preventDefault();

     db.collection('reply').add({
         name: replyForm['nameAuth'].value,
         email: replyForm['emailAuth'].value,
         reply: replyForm['replyAuth'].value

     });

     replyForm.reset();

     document.querySelector('#success').style.display = 'block';

     setTimeout(() => {
         document.querySelector('#success').style.display = 'none';
     }, 3000);

 });




 const reviewComments = document.querySelector('.commentSection');

db.collection('reply').onSnapshot((snapshot)=>{

    let changes = snapshot.docChanges();
 
changes.forEach(change => {
    
    if(change.type == 'added'){
        

        getComments(change.doc);

    }
    else if(change.type == 'removed' ){
        let comment = reviews.querySelector('[data-id='+ change.doc.id + ']');
        reviews.removeChild(comment);
    }

});



});


function getComments(element){

    let commentContainer  = document.createElement('div');
    commentContainer.setAttribute('class','commentContainer');
    let commentDetails  = document.createElement('div');
    commentDetails.setAttribute('class','commentDetails');
    let userDetails  = document.createElement('div');
    userDetails.setAttribute('class','userDetails');
    let commentName  = document.createElement('div');
    let date  = document.createElement('p');
    date.setAttribute('class','date');
    let comment  = document.createElement('h4');
    
    let replyBtn  = document.createElement('button');
    replyBtn.setAttribute('class','reply');
    
    
    // let deleteBtn = document.createElement('div');

    commentContainer.setAttribute('data-id',element.id);
    commentName.textContent = element.data().name;
    date.textContent = '24 jan 2020';
    comment.textContent = element.data().reply;
    replyBtn.textContent = 'reply';

    

    commentContainer.appendChild(commentDetails);
    commentDetails.appendChild(userDetails);
    userDetails.appendChild(commentName);
    userDetails.appendChild(date);
    userDetails.appendChild(comment);
    commentContainer.appendChild(replyBtn);
   
   

    reviewComments.appendChild(commentContainer);


    // deleteBtn.addEventListener('click',(e)=>{
    //     e.preventDefault();

    //     let id = e.target.parentElement.getAttribute('data-id');
    //     db.collection('reviews').doc(id).delete();
    
    // });

}

   