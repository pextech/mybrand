
        var registerForm = document.querySelector('#registerForm');
        var  email = document.querySelector('#emailAuth');
        var password = document.querySelector('#passAuth');

        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            auth.createUserWithEmailAndPassword(registerForm['emailAuth'].value, registerForm['passAuth'].value).then((cred)=>{


                window.location = 'admin/admin-dashboard.html';
               

            }).catch(err=> {
                
                alert(err.message);
                
            });


            registerForm.reset();
            
           


        });
