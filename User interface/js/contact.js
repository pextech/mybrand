
        var contactForm = document.querySelector('#contactFormInput');


        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            db.collection('reviews').add({
                name: contactForm['nameAuth'].value,
                email: contactForm['emailAuth'].value,
                phone: contactForm['phoneAuth'].value,
                message: contactForm['messageAuth'].value

            });

            contactForm.reset();

            document.querySelector('#success').style.display = 'block';

            setTimeout(() => {
                document.querySelector('#success').style.display = 'none';
            }, 3000);

        });
