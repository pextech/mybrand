const logout = document.querySelector('#logout');

// document.querySelectorAll('.number').innerHTML=`${total}`;






logout.addEventListener('click',(e)=>{
e.preventDefault();

auth.signOut().then(()=>{
    console.log('loggged out');
});

window.location='../login.html';
 

});