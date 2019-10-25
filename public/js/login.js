const form = document.querySelector('form');

const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    // console.log('Form submitted');
    // Get All Form Values

    const email = document.getElementById('inputEmail');
    const password = document.getElementById('inputPassword');
 
      const userData = {
        email: email.value,
        password: password.value,

    };

  
      // handle login
    if (formIsValid) {
      console.log('Submitting user login --> ', userData);
      fetch('/api/v1/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
        .then(dataStream => dataStream.json())
        .then(res => {
          console.log(res);
          if (res.status === 201) {
            window.sessionStorage.setItem(`userId`, `${res.data.id}`);
            window.sessionStorage.setItem(`firstName`, `${res.data.firstName}`);
            return window.location.href=`/account/${res.data.id}`;
        }})
        .catch(err => console.log(err));
    }
     
}

  
  form.addEventListener('submit', handleSubmit);