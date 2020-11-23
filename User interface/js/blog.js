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